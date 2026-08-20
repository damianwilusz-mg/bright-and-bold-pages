import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/lib/content";
import { usePrefs } from "@/lib/prefs";
import { getPosts, formatDate } from "@/lib/blog";
import { SiteFooter, SiteHeader } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Damian Wilusz, Software Tester" },
      {
        name: "description",
        content:
          "Notes on manual and automated testing, API validation, release QA and building reliable software.",
      },
      { property: "og:title", content: "Blog — Damian Wilusz, Software Tester" },
      {
        property: "og:description",
        content: "Essays and notes on QA, test automation and shipping stable releases.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { lang } = usePrefs();
  const t = content[lang];
  const posts = getPosts(lang);

  return (
    <div className="min-h-screen">
      <SiteHeader variant="page" />
      <main className="mx-auto max-w-3xl px-6">
        <section className="py-16 md:py-24">
          <Reveal>
            <p className="label-mono mb-4">{t.blog.title}</p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.blog.title}</h1>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              {t.blog.subtitle}
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {posts.length === 0 && <p className="text-muted-foreground">{t.blog.empty}</p>}
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="surface-card lift block p-6 md:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatDate(p.date, lang)}
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary">
                    {t.blog.read}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        <SiteFooter />
      </main>
    </div>
  );
}
