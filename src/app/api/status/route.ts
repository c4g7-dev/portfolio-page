import { NextResponse } from "next/server";

export const revalidate = 60;

const BASE = process.env.NEXT_PUBLIC_STATUS_BASE ?? "https://status.c4g7.com";
const SLUG = process.env.STATUS_SLUG ?? "default";

type Heartbeat = { status: 0 | 1 | 2 | 3; time: string; msg?: string; ping?: number };
type HeartbeatResponse = {
  heartbeatList: Record<string, Heartbeat[]>;
  uptimeList: Record<string, number>;
};

export async function GET() {
  const url = `${BASE}/api/status-page/heartbeat/${SLUG}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: { accept: "application/json" },
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);
    const data = (await res.json()) as HeartbeatResponse;

    const monitorIds = Object.keys(data.heartbeatList ?? {});
    const total = monitorIds.length;

    let up = 0;
    let down = 0;
    let pending = 0;
    let maintenance = 0;
    let pingSum = 0;
    let pingCount = 0;

    for (const id of monitorIds) {
      const beats = data.heartbeatList[id] ?? [];
      const last = beats[beats.length - 1];
      if (!last) continue;
      switch (last.status) {
        case 1:
          up++;
          break;
        case 0:
          down++;
          break;
        case 2:
          pending++;
          break;
        case 3:
          maintenance++;
          break;
      }
      if (typeof last.ping === "number") {
        pingSum += last.ping;
        pingCount++;
      }
    }

    const uptimeValues = Object.values(data.uptimeList ?? {});
    const avgUptime =
      uptimeValues.length > 0
        ? uptimeValues.reduce((a, b) => a + b, 0) / uptimeValues.length
        : null;

    const overall: "operational" | "degraded" | "down" | "unknown" =
      total === 0
        ? "unknown"
        : down > 0
          ? "down"
          : pending > 0
            ? "degraded"
            : "operational";

    return NextResponse.json({
      overall,
      total,
      up,
      down,
      pending,
      maintenance,
      avgUptime,
      avgPing: pingCount > 0 ? Math.round(pingSum / pingCount) : null,
      updatedAt: new Date().toISOString(),
      source: BASE,
    });
  } catch {
    return NextResponse.json(
      {
        overall: "unknown" as const,
        total: 0,
        up: 0,
        down: 0,
        pending: 0,
        maintenance: 0,
        avgUptime: null,
        avgPing: null,
        updatedAt: new Date().toISOString(),
        source: BASE,
      },
      { status: 200 }
    );
  }
}
