import type { ReactNode } from "react";

/* 👇 Change this one line later to use a different background picture.
   Put the image in the `public/` folder, e.g. public/bg.jpg  */
const BG_IMAGE = "/assets/n.png";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  {
    label: "Blogs",
    href: "#blogs",
    active: true,
    children: [
      { label: "1 Column", href: "#blog-1-column" },
      { label: "2 Columns", href: "#blog-2-columns" },
      { label: "Sidebar Post", href: "#blog-sidebar" },
    ],
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    children: [
      { label: "Grid", href: "#portfolio-3-columns" },
      { label: "Single Portfolio", href: "#portfolio-1-column" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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

/* ---------- Left menu ----------
   Font size is set once on <nav>; everything inside uses em,
   so the whole menu scales together like in the design. */
function Menu({ onNavigate }: { onNavigate?: (href: string) => void }) {
  return (
    <nav
      aria-label="Main"
      className="relative z-10 font-rufina text-[clamp(24px,5.1vh,52px)] max-sm:text-[clamp(24px,6.5vw,28px)]"
    >
      <ul className="m-0 list-none p-0">
        {navItems.map((item) => (
          <li key={item.label} className="mb-[0.26em] last:mb-0">
            {item.label === "Home" ? (
              <button
                onClick={() => onNavigate?.(item.href)}
                className="inline-flex items-center gap-[0.3em] py-[0.04em] text-[1em] font-bold uppercase leading-[1.1] tracking-[0] bg-transparent cursor-pointer transition-all duration-200 before:size-[0.16em] before:min-h-1 before:min-w-1 before:shrink-0 before:rounded-full before:bg-current before:content-[''] hover:translate-x-1 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent text-white"
              >
                {item.label}
              </button>
            ) : (
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.(item.href);
                }}
                className={`inline-flex items-center gap-[0.3em] py-[0.04em] text-[1em] font-bold uppercase leading-[1.1] tracking-[0] no-underline transition-all duration-200 before:size-[0.16em] before:min-h-1 before:min-w-1 before:shrink-0 before:rounded-full before:bg-current before:content-[''] hover:translate-x-1 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  item.active ? "text-accent" : "text-white"
                }`}
              >
                {item.label}
              </a>
            )}

            {item.children && (
              <div className="ml-[0.6em] mt-[0.08em] text-[0.42em] max-sm:text-[0.5em]">
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.(child.href);
                    }}
                    className="block leading-[1.2] text-muted no-underline transition-colors hover:text-accent"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Right contact block ---------- */
function ContactInfo() {
  return (
    <aside
      id="contact"
      className="absolute left-[74%] top-[48%] z-10 w-[17%] min-w-[130px] max-w-[220px] font-rufina text-[clamp(10px,1.05vw,16px)] leading-[1.45] text-muted max-sm:relative max-sm:left-auto max-sm:top-auto max-sm:mt-4 max-sm:w-full max-lg:top-[38%]"
    >
      <h3 className="m-0 mb-[0.55em] border-b-2 border-dotted border-white/80 pb-[0.3em] text-[clamp(13px,1.5vw,24px)] font-bold leading-tight text-white">
        Contact
      </h3>
      <p className="mb-[0.7em]">
        <a href="tel:+8685234600" className="no-underline">+86 852 346 000</a>
        <br />
        <a href="mailto:info@foodzero.com" className="no-underline">info@foodzero.com</a>
      </p>
      <p className="mb-[0.7em]">
        1919 Sepulveda Blvd,
        <br />
        Culver City, CA, 90230
      </p>
      <div className="flex gap-[0.7em]">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="inline-flex text-white transition-colors hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-[clamp(14px,1.5vw,26px)] fill-none stroke-current stroke-[1.8]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {s.icon}
            </svg>
          </a>
        ))}
      </div>
    </aside>
  );
}

/* ---------- Full page ---------- */
type NavigationProps = {
  onComingSoonClick?: () => void;
  onNavigate?: (href: string) => void;
};

export function Navigation({ onComingSoonClick, onNavigate }: NavigationProps) {
  return (
    <main className="relative flex h-dvh flex-col items-start justify-start overflow-hidden bg-[#354322] px-[10.7vw] pt-[8vh] max-sm:pt-[6vh]">
      {/* Full-screen background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      <Menu onNavigate={onNavigate} />
      <ContactInfo />
      <button
        type="button"
        onClick={onComingSoonClick}
        className="absolute bottom-[4vh] left-1/2 z-20 -translate-x-1/2 border border-white/70 px-6 py-2 font-rufina text-[clamp(14px,1.2vw,20px)] font-bold uppercase text-white transition-colors cursor-pointer hover:border-accent hover:text-accent"
      >
        Coming Soon
      </button>
    </main>
  );
}

export default Navigation;