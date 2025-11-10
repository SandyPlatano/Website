"use client";

import { useState, FormEvent } from "react";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import Container from "@/components/container";
import CTAButton from "@/components/cta-button";
import { CalendlyIcon } from "@/components/icons/calendly";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { contactDetails } from "@/content/contact";
import { cn } from "@/lib/cn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setSubmitMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitStatus("success");
      setSubmitMessage(data.message || "Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later or contact me directly via email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Get current date for Calendly link
  const getCalendlyUrl = () => "https://calendly.com/gtmbyferm/30min";

  return (
    <>
      <PageSection bleed className="bg-pf-cream">
        <Container className="grid gap-12 py-24 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-stretch lg:gap-16">
          <div className="flex h-full flex-col gap-10 rounded-3xl border border-pf-charcoal/10 bg-white/70 p-8 shadow-card backdrop-blur">
            <SectionHeading eyebrow="Contact" title="Let's work together." />
            <div className="flex flex-col gap-6">
              <div className="rounded-[28px] border border-white/20 bg-gradient-to-br from-pf-charcoal via-pf-charcoal/90 to-pf-charcoal/80 p-6 text-white shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Email</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-4 block break-all text-2xl font-semibold leading-snug tracking-[-0.01em] text-white transition hover:text-white/80"
                >
                  {contactDetails.email}
                </a>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-pf-charcoal/10 bg-white/90 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pf-muted">Phone</p>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="mt-2 block text-xl font-semibold leading-tight text-pf-charcoal transition hover:text-pf-charcoal/70"
                  >
                    {contactDetails.phone}
                  </a>
                </div>
                <span className="inline-flex items-center justify-center rounded-full border border-pf-charcoal/10 bg-pf-charcoal/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pf-charcoal/70">
                  Text or call
                </span>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {contactDetails.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center justify-between rounded-2xl border border-pf-charcoal/10 bg-white/80 px-5 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-pf-charcoal transition hover:border-pf-charcoal hover:bg-white"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                >
                  <span className="flex items-center gap-3 text-sm leading-none">
                    {social.icon === "linkedin" ? (
                      <LinkedInIcon className="h-5 w-5 text-pf-charcoal/80 transition group-hover:text-pf-charcoal" aria-hidden="true" />
                    ) : null}
                    {social.label}
                  </span>
                </a>
              ))}
              <a
                href={getCalendlyUrl()}
                className="group flex items-center justify-between rounded-2xl border border-pf-charcoal/10 bg-white/80 px-5 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-pf-charcoal transition hover:border-pf-charcoal hover:bg-white"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Book time"
              >
                <span className="flex items-center gap-3 text-sm leading-none">
                  <CalendlyIcon className="h-5 w-5 text-pf-charcoal/80 transition group-hover:text-pf-charcoal" aria-hidden="true" />
                  BOOK TIME
                </span>
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col justify-between rounded-3xl border border-pf-charcoal/10 bg-white/80 p-8 shadow-card"
          >
            <div className="grid flex-1 gap-6">
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Full name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                  className={cn(
                    "rounded-2xl border bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition",
                    errors.name
                      ? "border-red-500 focus:border-red-600"
                      : "border-pf-charcoal/15 focus:border-pf-charcoal"
                  )}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="text-xs text-red-600" role="alert">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={cn(
                    "rounded-2xl border bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition",
                    errors.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-pf-charcoal/15 focus:border-pf-charcoal"
                  )}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="text-xs text-red-600" role="alert">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Company
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Apple"
                  className="rounded-2xl border border-pf-charcoal/15 bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition focus:border-pf-charcoal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message"
                  required
                  className={cn(
                    "rounded-2xl border bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition",
                    errors.message
                      ? "border-red-500 focus:border-red-600"
                      : "border-pf-charcoal/15 focus:border-pf-charcoal"
                  )}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="text-xs text-red-600" role="alert">
                    {errors.message}
                  </span>
                )}
              </label>
              {submitStatus === "success" && (
                <div
                  className="rounded-2xl border border-green-500/30 bg-green-50 px-4 py-3 text-sm text-green-800"
                  role="alert"
                >
                  {submitMessage}
                </div>
              )}
              {submitStatus === "error" && (
                <div
                  className="rounded-2xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-800"
                  role="alert"
                >
                  {submitMessage}
                </div>
              )}
              <div className="mt-auto pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition",
                    isSubmitting
                      ? "cursor-not-allowed border-pf-charcoal/20 bg-pf-charcoal/10 text-pf-charcoal/50"
                      : "border-pf-accent bg-pf-accent text-pf-ink hover:bg-pf-accent-bold hover:border-pf-accent-bold"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </div>
          </form>
        </Container>
      </PageSection>
    </>
  );
}

