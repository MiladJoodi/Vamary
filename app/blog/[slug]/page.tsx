import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getPostBySlug, posts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <section className="section-y">
        <Container className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 66vw"
                priority
              />
            </div>
            <div className="mb-3 flex items-center gap-2">
              <Badge>{post.category}</Badge>
              <time className="text-xs text-muted">{post.date}</time>
            </div>
            <div className="prose-en text-sm leading-relaxed text-muted">
              <p>{post.content}</p>
            </div>
          </article>
          <aside>
            <h2 className="mb-3 text-sm font-semibold text-ink">Related articles</h2>
            <ul className="space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="flex gap-3 rounded-lg border border-border bg-surface p-2 transition hover:border-accent/40"
                  >
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-ink">{item.title}</p>
                      <p className="mt-0.5 text-[11px] text-muted">{item.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
