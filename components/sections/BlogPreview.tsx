import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { posts } from "@/data/blog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlogPreview() {
  return (
    <section className="section-y">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Blog"
            title="Guides & care tips"
            description="Practical content to help you make informed decisions about aesthetic treatments."
          />
        </FadeIn>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <StaggerItem key={post.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
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
                  <div className="mb-2 flex items-center gap-2 text-[11px] text-muted">
                    <span>{post.category}</span>
                    <span>·</span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="text-sm font-semibold text-ink">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-accent"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent"
                  >
                    Read more
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-7 text-center">
          <Button href="/blog" variant="outline" size="sm">
            All articles
          </Button>
        </div>
      </Container>
    </section>
  );
}
