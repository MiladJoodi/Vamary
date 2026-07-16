"use client";

import { faqs } from "@/data/faq";
import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({ items = faqs }: { items?: typeof faqs }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-border bg-surface"
          >
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-start"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span className="text-sm font-medium text-ink">{item.question}</span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted transition-transform",
                  open && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
