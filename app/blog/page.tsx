import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { posts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Specialist guides and articles on aesthetics and skin care.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        description="Practical tips for making informed decisions about aesthetic treatments."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="section-y">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex gap-2 text-[11px] text-muted">
                    <span>{post.category}</span>
                    <span>·</span>
                    <time>{post.date}</time>
                  </div>
                  <h2 className="text-sm font-semibold text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-1.5 flex-1 text-xs text-muted">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent"
                  >
                    Read more
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
