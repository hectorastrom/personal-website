import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { PostMetaRow } from "@/components/blog/PostMetaRow";
import { emphasisFont } from "@/lib/fonts";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: { slug: string };
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-6">
      <Link
        href="/blog"
        className={`text-sm text-slate-500 hover:text-slate-700 ${emphasisFont.className}`}
      >
        ← Back to blog
      </Link>
      <h1 className="text-5xl font-bold leading-tight text-slate-900">{post.title}</h1>
      <PostMetaRow
        dateCreated={post.dateCreated}
        dateUpdated={post.dateUpdated}
        tags={post.tags}
        className="text-slate-500"
      />
      <div className="pt-2">
        <MarkdownContent content={post.content} />
      </div>
    </article>
  );
}

