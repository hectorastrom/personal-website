import { emphasisFont } from "@/lib/fonts";

interface SocialLinksProps {
  variant: "side" | "top";
}

export default function SocialLinks({ variant }: SocialLinksProps) {
  const links = [
    { href: "mailto:hastrom@mit.edu", label: "Mail" },
    { href: "https://github.com/hectorastrom", label: "GitHub" },
    { href: "https://www.linkedin.com/in/hectorastrom", label: "LinkedIn" },
  ] as const;

  const containerClassName =
    variant === "side"
      ? "mt-6 flex flex-col items-start gap-2"
      : "flex flex-col items-end gap-2";

  return (
    <div className={containerClassName}>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`custom-link w-fit ${emphasisFont.className}`}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}


