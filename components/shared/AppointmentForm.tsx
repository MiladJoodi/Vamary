"use client";

import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { teamMembers } from "@/data/team";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.union([z.literal(""), z.string().email("Please enter a valid email")]),
  service: z.string().min(1, "Please select a service"),
  doctor: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "h-9 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-ring/40";
const selectClass = `${fieldClass} cursor-pointer`;

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      doctor: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-accent-soft p-6 text-center">
        <p className="text-sm font-medium text-accent-strong">
          Your request has been submitted
        </p>
        <p className="mt-1 text-xs text-muted">
          Our team will contact you shortly to schedule your visit.
        </p>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="mt-4"
          onClick={() => setSubmitted(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="name">
            Full name
          </label>
          <input id="name" className={fieldClass} {...register("name")} />
          {errors.name ? (
            <p className="mt-1 text-[11px] text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="phone">
            Phone
          </label>
          <input id="phone" className={fieldClass} {...register("phone")} />
          {errors.phone ? (
            <p className="mt-1 text-[11px] text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="email">
            Email (optional)
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-[11px] text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1 block text-xs text-muted" htmlFor="service">
            Service
          </label>
          <select id="service" className={selectClass} {...register("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="mt-1 text-[11px] text-red-600">
              {errors.service.message}
            </p>
          ) : null}
        </div>
        {!compact ? (
          <>
            <div>
              <label className="mb-1 block text-xs text-muted" htmlFor="doctor">
                Doctor (optional)
              </label>
              <select id="doctor" className={selectClass} {...register("doctor")}>
                <option value="">No preference</option>
                {teamMembers.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs text-muted" htmlFor="date">
                Preferred date
              </label>
              <input
                id="date"
                type="date"
                className={fieldClass}
                {...register("date")}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs text-muted" htmlFor="message">
                Notes
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/40"
                {...register("message")}
              />
            </div>
          </>
        ) : null}
      </div>
      <Button type="submit" size="sm" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Request appointment"}
      </Button>
    </form>
  );
}
