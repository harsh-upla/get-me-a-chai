// components/ContactForm.js
"use client";

import { useState, useRef } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const liveRef = useRef();

  // simple accessible validation rules
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "That email looks invalid.";
    if (!form.subject.trim()) e.subject = "Add a short subject.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Describe your request (10+ chars).";
    return e;
  }

  async function handleSubmit(e) {
    // e.preventDefault();
    // setStatus({ loading: false, success: null, error: null });
    // const eobj = validate();
    // setErrors(eobj);
    // if (Object.keys(eobj).length) {
    //   // focus live region for screen readers
    //   liveRef.current?.focus();
    //   return;
    // }

    // // simple honeypot anti-spam
    // const honeypot = e.target["website"]?.value;
    // if (honeypot) {
    //   // silently drop or show generic success
    //   setStatus({ loading: false, success: "Thanks — we'll be in touch.", error: null });
    //   return;
    // }

    // try {
    //   setStatus({ loading: true, success: null, error: null });
    //   const res = await fetch("/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });

    //   const json = await res.json();
    //   if (!res.ok) throw new Error(json?.error || "Failed to send message");

    //   setStatus({ loading: false, success: "Message sent — thanks! I will reply within 24–48 hours.", error: null });
    //   setForm({ name: "", email: "", subject: "", message: "" });
    //   liveRef.current?.focus();
    // } catch (err) {
    //   setStatus({ loading: false, success: null, error: err.message || "Something went wrong." });
    //   liveRef.current?.focus();

// }
    toast.success("Contact form submitted....")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-labelledby="contactHeading">
      <h2 id="contactHeading" className="text-2xl font-semibold text-white">Get in touch</h2>

      {/* ARIA live region for announcements */}
      <div
        ref={liveRef}
        tabIndex="-1"
        aria-live="polite"
        className="sr-only"
      />

      {/* Honeypot (hidden) */}
      <input type="text" name="website" autoComplete="off" tabIndex="-1" style={{ display: "none" }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs text-white/70">Your name</span>
          <input
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`mt-1 block w-full rounded-lg px-3 py-2 bg-white/6 border ${errors.name ? "border-rose-400" : "border-white/8"} focus:outline-none focus:ring-2 focus:ring-[#04D9D9]/40`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name && <div id="err-name" className="text-xs text-rose-400 mt-1">{errors.name}</div>}
        </label>

        <label className="block">
          <span className="text-xs text-white/70">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`mt-1 block w-full rounded-lg px-3 py-2 bg-white/6 border ${errors.email ? "border-rose-400" : "border-white/8"} focus:outline-none focus:ring-2 focus:ring-[#04D9D9]/40`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && <div id="err-email" className="text-xs text-rose-400 mt-1">{errors.email}</div>}
        </label>
      </div>

      <label className="block">
        <span className="text-xs text-white/70">Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={`mt-1 block w-full rounded-lg px-3 py-2 bg-white/6 border ${errors.subject ? "border-rose-400" : "border-white/8"} focus:outline-none focus:ring-2 focus:ring-[#04D9D9]/40`}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "err-subject" : undefined}
        />
        {errors.subject && <div id="err-subject" className="text-xs text-rose-400 mt-1">{errors.subject}</div>}
      </label>

      <label className="block">
        <span className="text-xs text-white/70">Message</span>
        <textarea
          name="message"
          rows="6"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`mt-1 block w-full rounded-lg px-3 py-2 bg-white/6 border ${errors.message ? "border-rose-400" : "border-white/8"} focus:outline-none focus:ring-2 focus:ring-[#04D9D9]/40`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && <div id="err-message" className="text-xs text-rose-400 mt-1">{errors.message}</div>}
      </label>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status.loading}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-lg text-white bg-linear-to-br from-[#04D9D9] to-[#3fb7ff] shadow-[0_8px_24px_rgba(4,217,217,0.18)] hover:brightness-95 disabled:opacity-60 transition"
        >
          {status.loading ? (
            // small aqua loader orb
            <span className="w-4 h-4 rounded-full bg-white/90 animate-pulse" aria-hidden="true" ></span>
          ) : (
            "Send message"
          )}
        </button>

        <button
          type="button"
          onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setErrors({}); setStatus({ loading: false, success: null, error: null }); }}
          className="px-3 py-2 rounded-lg text-sm bg-white/6 text-white/90 border border-white/8"
        >
          Reset
        </button>

        {/* status messages */}
        <div className="ml-auto text-sm">
          {status.success && <div role="status" className="text-xs text-green-300">{status.success}</div>}
          {status.error && <div role="alert" className="text-xs text-rose-400">{status.error}</div>}
        </div>
      </div>

      <div className="text-xs text-white/60 mt-2">By sending, you agree to receive a reply to the provided email.</div>
    </form>
  );
}