import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the specialist physicians at Vamary clinic.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our team"
        description="Plastic surgeons and dermatologists with a multidisciplinary approach."
        breadcrumbs={[{ label: "Our team" }]}
      />
      <section className="section-y">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-surface"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3.5">
                  <h2 className="text-sm font-semibold text-ink group-hover:text-accent">
                    {member.name}
                  </h2>
                  <p className="mt-0.5 text-xs text-muted">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
