import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getTeamMemberBySlug, teamMembers } from "@/data/team";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return { title: "Doctor not found" };
  return { title: member.name, description: member.bio };
}

export default async function TeamDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  return (
    <>
      <PageHero
        title={member.name}
        description={member.role}
        breadcrumbs={[
          { label: "Our team", href: "/team" },
          { label: member.name },
        ]}
      />
      <section className="section-y">
        <Container className="grid gap-8 md:grid-cols-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:col-span-2">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-accent">{member.role}</p>
            <h2 className="mt-1 text-lg font-semibold text-ink">{member.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
            <div className="mt-5">
              <p className="mb-2 text-xs font-medium text-ink">Specialties</p>
              <div className="flex flex-wrap gap-1.5">
                {member.specialties.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
            <Button href="/appointment" size="sm" className="mt-6">
              Book with this doctor
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
