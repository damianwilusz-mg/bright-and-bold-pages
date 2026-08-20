import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { content } from "@/lib/content";
import { usePrefs } from "@/lib/prefs";
import { formatDate, getPost, posts, renderMarkdown } from "@/lib/blog";
import { SiteFooter, SiteHeader } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { title: post.title, excerpt: post.excerpt };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found — Damian Wilusz" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} — Damian Wilusz`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const { lang } = usePrefs();
  const t = content[lang];
  const post = getPost(slug, lang);

  return (
    <div className="min-h-screen">
      <SiteHeader variant="page" />
      <main className="mx-auto max-w-3xl px-6">
        <article className="py-16 md:py-24">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t.blog.back}
            </Link>
            {post ? (
              <>
                <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                  {post.title}
                </h1>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {formatDate(post.date, lang)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-subtle px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <h1 className="mt-6 text-2xl font-semibold tracking-tight">{t.blog.empty}</h1>
            )}
          </Reveal>

          {post && (
            <Reveal delay={80}>
              <div
                className="prose-post mt-10"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
              />
            </Reveal>
          )}
        </article>
        <SiteFooter />
      </main>
    </div>
  );
}
