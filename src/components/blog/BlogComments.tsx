import { useRef, useState } from "react";
import type { FormEvent } from "react";

/* 👇 Put your pictures in public/images/ and change the names here. */
const IMAGES = {
  prev: "/assets/b5.png",
  next:  "/assets/b7.png",
  avatar1:  "/assets/h18.png",
  avatar2:  "/assets/h21.png",
  avatar3:  "/assets/h22.png",
  avatar4: "/assets/h23.png",
  you: "/images/avatar-you.jpg",
};

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.";

type Comment = {
  id: number;
  name: string;
  date: string;
  text: string;
  avatar: string;
  replies: Comment[];
};

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "March 12, 2020, 7:08 pm",
    text: TEXT,
    avatar: IMAGES.avatar1,
    replies: [
      {
        id: 2,
        name: "Jenifer Lopez",
        date: "March 12, 2020, 7:08 pm",
        text: `${TEXT} Lorem ipsum imperdiet.`,
        avatar: IMAGES.avatar2,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    name: "Jane Cooper",
    date: "March 12, 2020, 7:08 pm",
    text: TEXT,
    avatar: IMAGES.avatar3,
    replies: [],
  },
  {
    id: 4,
    name: "Jenny Wilson",
    date: "March 12, 2020, 7:08 pm",
    text: TEXT,
    avatar: IMAGES.avatar4,
    replies: [],
  },
];

const countComments = (list: Comment[]): number =>
  list.reduce((sum, c) => sum + 1 + countComments(c.replies), 0);

const labelClass = "mb-2 block font-sans text-xs font-bold";
const fieldClass =
  "w-full border border-black/70 bg-transparent px-3 font-sans text-sm text-black outline-none focus-visible:ring-1 focus-visible:ring-black";

function Arrow({ dir, className = "" }: { dir: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      aria-hidden="true"
      className={`fill-none stroke-current stroke-[1.4] ${dir === "left" ? "-scale-x-100" : ""} ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6h21M17 1l5 5-5 5" />
    </svg>
  );
}

function Avatar({ src, name, small = false }: { src: string; name: string; small?: boolean }) {
  return (
    <span
      role="img"
      aria-label={name}
      className={`shrink-0 rounded-full bg-[#cfd8c0] bg-cover bg-center ${small ? "size-9" : "size-10"}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

/* One half of the banner: fills its half of the screen, 356px tall on tablet and desktop */
function PostLink({
  image,
  label,
  title,
  dir,
}: {
  image: string;
  label: string;
  title: string;
  dir: "left" | "right";
}) {
  return (
    <a
      href="#post"
      className="group relative isolate flex h-[220px] w-full items-center justify-center overflow-hidden bg-[#6b6b5a] px-6 text-center text-white no-underline sm:h-[280px] md:h-[356px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* dark overlay so the white text is always clear */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/50" />

      <div className="max-w-md">
        <span className="flex items-center justify-center gap-2 font-sans text-[10px] uppercase tracking-wide sm:text-xs">
          {dir === "left" && <Arrow dir="left" className="w-5" />}
          {label}
          {dir === "right" && <Arrow dir="right" className="w-5" />}
        </span>
        <span className="mt-3 block text-base leading-snug [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] sm:text-lg lg:text-xl">
          {title}
        </span>
      </div>
    </a>
  );
}

export default function BlogComments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [replyTo, setReplyTo] = useState<{ id: number; name: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const startReply = (parentId: number, parentName: string) => {
    setReplyTo({ id: parentId, name: parentName });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const now = new Date().toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

    const newComment: Comment = {
      id: Date.now(),
      name: name.trim(),
      date: now.replace(" at ", ", ").replace(/ (AM|PM)$/, (m) => m.toLowerCase()),
      text: text.trim(),
      avatar: IMAGES.you,
      replies: [],
    };

    setComments((list) =>
      replyTo
        ? list.map((c) =>
            c.id === replyTo.id ? { ...c, replies: [...c.replies, newComment] } : c,
          )
        : [...list, newComment],
    );

    setText("");
    setName("");
    setEmail("");
    setWebsite("");
    setReplyTo(null);
  };

  /* One comment row. parentId is the top-level comment that replies attach to. */
  const renderComment = (c: Comment, parentId: number, nested: boolean) => (
    <li key={c.id} className={nested ? "mt-6 sm:ml-12" : ""}>
      <div className="flex gap-4">
        <Avatar src={c.avatar} name={c.name} small={nested} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-sans text-xs font-bold">{c.name}</span>
              <p className="m-0 mt-1 font-sans text-[11px] text-black/50">{c.date}</p>
            </div>
            <button
              type="button"
              onClick={() => startReply(parentId, c.name)}
              className="cursor-pointer border-0 bg-transparent p-0 font-sans text-xs text-black focus-visible:outline-2 focus-visible:outline-black"
            >
              Reply
            </button>
          </div>
          <p className="m-0 mt-2 font-sans text-xs leading-relaxed text-black/80 sm:text-[13px]">
            {c.text}
          </p>
        </div>
      </div>

      {c.replies.length > 0 && (
        <ul className="m-0 list-none p-0">
          {c.replies.map((r) => renderComment(r, parentId, true))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="w-full bg-white font-rufina text-black">
      {/* ================= Previous / next post (full width, 356px tall) ================= */}
      <nav
        aria-label="Blog posts"
        className="grid w-full grid-cols-1 gap-px bg-white opacity-100 sm:grid-cols-2"
      >
        <PostLink
          image={IMAGES.prev}
          label="Previous Post"
          title="7 Reasons to Start Your Day With Lemon Water"
          dir="left"
        />
        <PostLink
          image={IMAGES.next}
          label="Next Post"
          title="12 Sparkling Wines We're Loving This Summer"
          dir="right"
        />
      </nav>

      {/* ================= Comments + form ================= */}
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-12 sm:px-10 md:pb-28 md:pt-16">
        <h2 className="m-0 text-center text-2xl font-normal leading-none sm:text-3xl">
          {countComments(comments)} Comments
        </h2>

        <ul className="m-0 mt-10 list-none space-y-6 p-0">
          {comments.map((c) => renderComment(c, c.id, false))}
        </ul>

        <div
          aria-hidden="true"
          className="my-12 border-t-2 border-dotted border-black/70"
        />

        <h3 className="m-0 text-center text-lg font-normal leading-none sm:text-xl">
          Leave a Reply
        </h3>

        {replyTo && (
          <p className="m-0 mt-4 text-center font-sans text-xs">
            Replying to <strong>{replyTo.name}</strong>{" "}
            <button
              type="button"
              onClick={() => setReplyTo(null)}
              className="cursor-pointer border-0 bg-transparent p-0 font-sans text-xs underline"
            >
              Cancel
            </button>
          </p>
        )}

        <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="comment" className={labelClass}>
              Comment
            </label>
            <textarea
              id="comment"
              required
              rows={8}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`${fieldClass} resize-y py-3`}
            />
          </div>

          <div>
            <label htmlFor="name" className={labelClass}>
              Name*
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${fieldClass} h-11`}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email*
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${fieldClass} h-11`}
            />
          </div>

          <div>
            <label htmlFor="website" className={labelClass}>
              Website
            </label>
            <input
              id="website"
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className={`${fieldClass} h-11`}
            />
          </div>

          <button
            type="submit"
            className="mt-2 h-11 w-full cursor-pointer border border-black/80 bg-transparent px-8 font-sans text-sm text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:w-auto"
          >
            Post Comment
          </button>
        </form>
      </section>
    </div>
  );
}