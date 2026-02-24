// app/contact/page.js
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact — Your Name",
  description: "Get in touch with me ",
};

export default function ContactPage() {
  return (
    <main className="min-h-[88.2vh]  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px] flex items-center justify-center p-6">
      {/* background linear */}
      <div className="absolute inset-0 -z-20  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]" />

      <section className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Info */}
        <div
          className="p-8 rounded-2xl
                        backdrop-blur-xl
                        bg-[linear-linear(180deg,rgba(255,255,255,0.03)_0%,rgba(4,217,217,0.04)_100%)]
                        border border-[rgba(255,255,255,0.12)]
                        shadow-[0_12px_40px_rgba(3,10,18,0.6)]
                        text-white"
        >
          <h1 className="text-3xl font-semibold">
            Let's build something great
          </h1>
          <p className="mt-3 text-white/75">
            Whether it’s a freelance project, full-time role, or just a quick
            question — tell me a bit about it and I’ll get back within 24–48
            hours.
          </p>

          <div className="mt-6 space-y-4 text-sm text-white/70">
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">
                Email
              </div>
              <div className="font-medium">harshupla42@gmail.com</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">
                Location
              </div>
              <div className="font-medium">Ahmedabad , Gujarat , India</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">
                Hours
              </div>
              <div className="font-medium">Mon–Fri, 9:00–20:00 IST</div>
            </div>

            <div>
              <div className="">Check out my github</div>
              <Link
              href={"https://github.com/harsh-upla/"}
                type="submit"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-lg text-white bg-linear-to-br from-[#04D9D9] to-[#3fb7ff] shadow-[0_8px_24px_rgba(4,217,217,0.18)] hover:brightness-95 disabled:opacity-60 transition"
              >
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="p-6 md:p-8 rounded-2xl
                        backdrop-blur-xl
                        bg-[linear-linear(180deg,rgba(255,255,255,0.06)_0%,rgba(4,217,217,0.08)_100%)]
                        border border-[rgba(255,255,255,0.18)]
                        shadow-[0_12px_40px_rgba(3,10,18,0.6)]"
        >
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
