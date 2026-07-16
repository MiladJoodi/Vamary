"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav, siteConfig } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border/80 bg-surface/90 shadow-sm shadow-ink/5 backdrop-blur-md"
            : "border-transparent bg-background/80 backdrop-blur-sm",
        )}
      >
        <Container className="flex h-14 items-center justify-between gap-4 md:h-16">
          <Link href="/" className="relative flex shrink-0 items-center gap-2">
            <Image
              src="/images/logo/logo.png"
              alt={siteConfig.name}
              width={110}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Main navigation"
          >
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const hasChildren = Boolean(item.children?.length);

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-accent-soft text-accent-strong"
                        : "text-muted hover:bg-surface-2 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-1 rounded-md px-2.5 py-1.5 text-sm transition-colors",
                      active || openDropdown === item.href
                        ? "bg-accent-soft text-accent-strong"
                        : "text-muted hover:bg-surface-2 hover:text-foreground",
                    )}
                    aria-expanded={openDropdown === item.href}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 opacity-70" />
                  </button>
                  {openDropdown === item.href ? (
                    <div className="absolute top-full left-0 pt-1">
                      <div className="min-w-40 rounded-lg border border-border bg-surface p-1.5 shadow-lg shadow-ink/8">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-2.5 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden items-center gap-1.5 rounded-md px-2 py-1.5 text-xs text-muted transition-colors hover:text-accent sm:inline-flex"
            >
              <Phone className="size-3.5" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <Button href="/appointment" size="sm" className="hidden sm:inline-flex">
              Book visit
            </Button>
            <button
              type="button"
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-border bg-surface text-foreground lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-ink/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 flex w-[min(100%,18rem)] flex-col bg-surface shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-14 items-center justify-between border-b border-border px-4">
            <Image
              src="/images/logo/logo.png"
              alt={siteConfig.name}
              width={100}
              height={28}
              className="h-6 w-auto"
            />
            <button
              type="button"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-md hover:bg-surface-2"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-3" aria-label="Mobile navigation">
            <ul className="space-y-0.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm",
                      pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href))
                        ? "bg-accent-soft text-accent-strong"
                        : "text-foreground hover:bg-surface-2",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="mt-0.5 space-y-0.5 border-l border-border ps-3 pe-0">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-1.5 text-xs text-muted hover:bg-surface-2 hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-border p-3">
            <Button href="/appointment" className="w-full" size="sm">
              Book visit
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
