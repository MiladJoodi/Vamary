import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex size-8 items-center justify-center rounded-md bg-white/10 text-white/80 transition hover:bg-white/15 hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  );
}

const footerLinks = [
  {
    title: "Clinic",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our team", href: "/team" },
      { label: "Case studies", href: "/cases" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Rhinoplasty", href: "/services/rhinoplasty" },
      { label: "Skin care", href: "/services/skin-care" },
      { label: "Breast surgery", href: "/services/breast-surgery" },
      { label: "Non-surgical", href: "/services/non-surgical" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-white">
      <Container className="section-y !py-10 md:!py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/images/logo/logo-white.png"
              alt={siteConfig.name}
              width={120}
              height={36}
              className="mb-4 h-8 w-auto brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex gap-2">
              <SocialIcon label="Instagram" href={siteConfig.social.instagram}>
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Telegram" href={siteConfig.social.telegram}>
                <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                  <path d="M21.5 3.5 2.8 11.2c-.9.4-.9 1.6.1 1.9l4.7 1.5 1.8 5.6c.3.9 1.5 1.1 2.1.4l2.7-2.9 4.9 3.6c.8.6 1.9.1 2.1-.9L22.9 4.7c.2-1.1-.9-1.9-1.9-1.4z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn" href={siteConfig.social.linkedin}>
                <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
                  <path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3zM20.3 20h-2.8v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V20h-2.8s.0-9.4 0-10.5h2.8v1.5c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V20z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h3 className="mb-3 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-white/45" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 text-white/45" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 shrink-0 text-white/45" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Button
                href="/appointment"
                size="sm"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                Book a consult
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-3">
            <Link href="/faq" className="hover:text-white/70">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white/70">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-white/70">
              Blog
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
