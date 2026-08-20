import { marked } from "marked";
import type { Lang } from "./content";

export type Post = {
  slug: string;
  lang: Lang;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
};

const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { data: {} as Record<string, string>, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    data[line.slice(0, idx).trim()] = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return { data, body: raw.slice(match[0].length) };
}

function parseTags(value?: string): string[] {
  if (!value) return [];
  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((t) => t.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const fallbackSlug = path.split("/").pop()!.replace(/\.[a-z]{2}\.md$/, "");
    return {
      slug: data.slug ?? fallbackSlug,
      lang: (data.lang === "pl" ? "pl" : "en") as Lang,
      title: data.title ?? fallbackSlug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      tags: parseTags(data.tags),
      body,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPosts(lang: Lang) {
  return posts.filter((p) => p.lang === lang);
}

export function getPost(slug: string, lang: Lang) {
  return posts.find((p) => p.slug === slug && p.lang === lang) ?? posts.find((p) => p.slug === slug);
}

export function renderMarkdown(body: string) {
  return marked.parse(body, { async: false }) as string;
}

export function formatDate(date: string, lang: Lang) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
