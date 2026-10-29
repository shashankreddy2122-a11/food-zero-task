import { useState } from "react";
import type { ReactNode } from "react";

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" />
      </>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7C8.4 8.7 5.4 7 3.4 4.5a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.3 11.7 11.7 0 0 0 8.3 20c7.6 0 11.8-6.3 11.8-11.8v-.5c.8-.6 1.5-1.3 1.9-1.8z" />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M16 21v-7h2.5l.5-3h-3V9.5c0-.9.4-1.5 1.5-1.5H19V5.3C18.5 5.2 17.6 5 16.7 5 14.5 5 13 6.3 13 8.8V11h-3v3h3v7" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.5v5l4.5-2.5z" />
      </>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#223403] font-rufina text-white">
      <div className="@container relative mx-auto aspect-[850/293] w-full max-w-[1200px] max-[640px]:aspect-auto max-[640px]:flex max-[640px]:flex-col max-[640px]:gap-6 max-[640px]:px-6 max-[640px]:py-10">
        {/* ---------- Logo ---------- */}
        <a
          href="#home"
          className="absolute left-[7.1%] top-[23.5%] m-0 text-[length:max(20px,3.9cqw)] font-normal leading-[1.17] text-white no-underline max-[640px]:static max-[640px]:text-3xl"
        >
          Food
          <br />
          Zero.
        </a>

        {/* ---------- Contact ---------- */}
        <h3 className="absolute left-[29.4%] top-[20%] m-0 text-[length:max(12px,1.85cqw)] font-normal leading-none max-[640px]:static max-[640px]:text-xl">
          Contact
        </h3>

        <div className="absolute left-[29.4%] top-[35.3%] font-sans text-[length:max(7px,1.1cqw)] leading-[1.5] max-[640px]:static max-[640px]:text-sm">
          <p className="m-0 mb-[1.9cqw]">
            <a href="tel:+8685234600" className="text-white no-underline">
              +1+86 852 346 000
            </a>
            <br />
            <a href="mailto:info@foodzero.com" className="text-white no-underline">
              info@foodzero.com
            </a>
          </p>
          <p className="m-0">
            1959 Sepulveda Blvd.
            <br />
            Culver City, CA. 90230
          </p>
        </div>

        {/* ---------- Newsletter ---------- */}
        <h3 className="absolute left-[51.9%] top-[20%] m-0 text-[length:max(12px,1.85cqw)] font-normal leading-none max-[640px]:static max-[640px]:text-xl">
          Never Miss a Recipe
        </h3>

        <form onSubmit={onSubmit} className="contents max-[640px]:flex max-[640px]:flex-col max-[640px]:gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setDone(false);
            }}
            placeholder="Email Address"
            aria-label="Email address"
            className="absolute left-[51.9%] top-[35.5%] h-[14.7%] w-[27.4%] border border-white bg-transparent px-[2%] font-sans text-[length:max(8px,1.4cqw)] text-white outline-none placeholder:text-white/90 focus-visible:ring-1 focus-visible:ring-white max-[640px]:static max-[640px]:h-12 max-[640px]:w-full max-[640px]:px-3 max-[640px]:text-sm"
          />
          <button
            type="submit"
            className="absolute left-[80.7%] top-[36.2%] h-[13.4%] w-[12.7%] cursor-pointer border-0 bg-[#5a6a00] text-[length:max(9px,1.75cqw)] text-white transition-colors hover:bg-[#6c7e08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-[640px]:static max-[640px]:h-12 max-[640px]:w-full max-[640px]:text-sm"
          >
            Subscribe
          </button>
        </form>

        <p
          aria-live="polite"
          className="absolute left-[51.9%] top-[52%] m-0 font-sans text-[length:max(6px,0.85cqw)] leading-none max-[640px]:static max-[640px]:text-sm"
        >
          {done
            ? "Thanks for subscribing! Check your inbox."
            : "Join our subscribers and get best recipe delivered each week!"}
        </p>

        {/* ---------- Dotted line ---------- */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[75.4%] border-t border-dotted border-white/70 max-[640px]:static"
        />

        {/* ---------- Bottom bar ---------- */}
        <p className="absolute left-[7.1%] top-[87.4%] m-0 -translate-y-1/2 font-sans text-[length:max(8px,1.4cqw)] leading-none max-[640px]:static max-[640px]:translate-y-0 max-[640px]:text-xs">
          © 2020 Zero Inc. All rights Reserved
        </p>

        <div className="absolute right-[6.6%] top-[87.4%] flex -translate-y-1/2 gap-[2cqw] max-[640px]:static max-[640px]:translate-y-0 max-[640px]:gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="inline-flex text-white transition-colors hover:text-[#b5c93a]"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-[max(12px,1.65cqw)] fill-none stroke-current stroke-[1.8] max-[640px]:size-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}