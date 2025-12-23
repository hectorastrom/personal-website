import Link from "next/link";
import { Metadata } from "next";
import { getAllPostMetas } from "@/lib/posts";
import { emphasisFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Blog | Hector Astrom",
  description: "Writings from Hector.",
};

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPostMetas();

  const grouped = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const date = new Date(post.dateCreated);
    const key = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    if (!acc[key]) acc[key] = [];
    acc[key].push(post);
    return acc;
  }, {});

  const groupEntries = Object.entries(grouped).sort(
    ([a], [b]) => new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="flex flex-col gap-8">
      <h1
        className={`text-2xl md:text-3xl text-emphasis font-bold ${emphasisFont.className} pb-6`}
      >
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-slate-600">Blog just added - no posts yet.</p>
      ) : (
        <div className="space-y-6">
          {groupEntries.map(([label, items]) => (
            <div key={label} className="space-y-2">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {label}
              </div>
              <div className="space-y-1">
                {items.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors duration-200 hover:bg-slate-100"
                  >
                    <span className="text-2xl font-bold text-body hover:text-emphasis">
                      {post.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.dateCreated).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}