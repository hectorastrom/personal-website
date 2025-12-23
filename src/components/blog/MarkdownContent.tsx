import ReactMarkdown, { Components } from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import { emphasisFont } from "@/lib/fonts";
import MarkdownHr from "./MarkdownHr";

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold leading-tight mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold leading-tight mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold leading-tight mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => <p className="text-xl leading-8 text-slate-800">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-2 text-xl leading-8 text-slate-800">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-2 text-xl leading-8 text-slate-800">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-xl leading-8">{children}</li>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={`custom-link ${emphasisFont.className}`}
      >
        {children}
      </a>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-slate-300 bg-slate-100/80 px-4 py-3 rounded-r-lg text-slate-700">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="rounded-xl border border-slate-200 bg-slate-100 p-4 overflow-x-auto text-sm leading-6">
      {children}
    </pre>
  ),
  code({ children, className }) {
    const isBlockCode = typeof className === "string" && className.length > 0;

    if (!isBlockCode) {
      return (
        <code
          className="rounded bg-slate-200/80 px-1.5 py-0.5 font-mono text-[0.9em] text-sky-900"
        >
          {children}
        </code>
      );
    }

    return <code className={`font-mono ${className}`}>{children}</code>;
  },
  hr: () => <MarkdownHr />,
  img: ({ src, alt }) => (
    <img
      src={src ?? ""}
      alt={alt ?? ""}
      className="rounded-xl border border-slate-200 shadow-sm"
      loading="lazy"
    />
  ),
};

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="flex flex-col gap-6">
      <ReactMarkdown
        components={markdownComponents}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

