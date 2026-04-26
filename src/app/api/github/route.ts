import { NextResponse } from "next/server";

export const revalidate = 600;

const USER = process.env.NEXT_PUBLIC_GITHUB_USER ?? "c4g7-dev";
const TOKEN = process.env.GITHUB_TOKEN;

type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
  topics?: string[];
};

export async function GET() {
  const url = `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed&type=owner`;
  const headers: Record<string, string> = {
    accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "user-agent": "c4g7-profile-site",
  };
  if (TOKEN) headers.authorization = `Bearer ${TOKEN}`;

  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate: 600, tags: ["github-repos"] },
    });
    if (!res.ok) {
      return NextResponse.json(
        { repos: [], error: `upstream ${res.status}` },
        { status: 200 }
      );
    }
    const data = (await res.json()) as GithubRepo[];

    const repos = data
      .filter((r) => !r.fork && !r.archived && !r.private)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      )
      .slice(0, 6)
      .map((r) => ({
        id: r.id,
        name: r.name,
        fullName: r.full_name,
        url: r.html_url,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        pushedAt: r.pushed_at,
        topics: r.topics ?? [],
      }));

    return NextResponse.json({ repos, user: USER });
  } catch {
    return NextResponse.json({ repos: [], user: USER }, { status: 200 });
  }
}
