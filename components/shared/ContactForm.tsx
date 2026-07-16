"use client";

import { Button } from "@/components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "h-9 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/40";

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
    reset();
  };

  if (done) {
    return (
      <div className="rounded-xl border border-border bg-accent-soft p-6 text-center">
        <p className="text-sm font-medium text-accent-strong">Message sent</p>
        <p className="mt-1 text-xs text-muted">We’ll get back to you soon.</p>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="mt-4"
          onClick={() => setDone(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="c-name">
            Name
          </label>
          <input id="c-name" className={fieldClass} {...register("name")} />
          {errors.name ? (
            <p className="mt-1 text-[11px] text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="c-phone">
            Phone
          </label>
          <input id="c-phone" className={fieldClass} {...register("phone")} />
          {errors.phone ? (
            <p className="mt-1 text-[11px] text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="c-email">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-[11px] text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="c-subject">
            Subject
          </label>
          <input id="c-subject" className={fieldClass} {...register("subject")} />
          {errors.subject ? (
            <p className="mt-1 text-[11px] text-red-600">
              {errors.subject.message}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted" htmlFor="c-message">
          Message
        </label>
        <textarea
          id="c-message"
          rows={4}
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-[11px] text-red-600">{errors.message.message}</p>
        ) : null}
      </div>
      <Button type="submit" size="sm" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
