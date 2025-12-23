import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "public", "posts");

export type PostFrontmatter = {
  title: string;
  date_created: string;
  date_updated?: string;
  tags?: string[] | string;
  hidden?: boolean | string;
};

export type PostMeta = {
  slug: string;
  title: string;
  dateCreated: string;
  dateUpdated: string;
  tags: string[];
  excerpt: string;
  hidden: boolean;
};

export type Post = PostMeta & {
  content: string;
};

function getPostDirectories(): string[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function normalizeTags(rawTags: string[] | string | undefined): string[] {
  if (!rawTags) return [];
  if (Array.isArray(rawTags)) return rawTags.map((tag) => tag.trim()).filter(Boolean);
  return rawTags
    .split(/[,;]+/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function normalizeHidden(rawHidden: boolean | string | undefined): boolean {
  if (rawHidden === true) return true;
  if (rawHidden === false || rawHidden == null) return false;
  if (typeof rawHidden === "string") {
    const lowered = rawHidden.trim().toLowerCase();
    return lowered === "true" || lowered === "1" || lowered === "yes" || lowered === "y";
  }
  return false;
}

function parseFrontmatter(frontmatter: PostFrontmatter): {
  title: string;
  dateCreated: string;
  dateUpdated: string;
  tags: string[];
  hidden: boolean;
} {
  const { title, date_created, date_updated, tags, hidden } = frontmatter;

  if (!title) {
    throw new Error("Post frontmatter is missing title");
  }

  if (!date_created) {
    throw new Error("Post frontmatter is missing date_created");
  }

  const normalizedTags = normalizeTags(tags);
  const dateCreated = date_created;
  const dateUpdated = date_updated || date_created;
  const normalizedHidden = normalizeHidden(hidden);

  return {
    title,
    dateCreated,
    dateUpdated,
    tags: normalizedTags,
    hidden: normalizedHidden,
  };
}

function createExcerpt(markdown: string, maxLength = 220): string {
  const text = markdown
    .replace(/`{3}[\s\S]*?`{3}/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[#>*_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

function readPost(slug: string): Post {
  const indexPath = path.join(POSTS_DIR, slug, "index.md");
  const raw = fs.readFileSync(indexPath, "utf8");
  const { data, content } = matter(raw);
  const meta = parseFrontmatter(data as PostFrontmatter);
  const excerpt = createExcerpt(content);

  return {
    slug,
    title: meta.title,
    dateCreated: meta.dateCreated,
    dateUpdated: meta.dateUpdated,
    tags: meta.tags,
    content,
    excerpt,
    hidden: meta.hidden,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostDirectories();
  return slugs
    .map((slug) => readPost(slug))
    .sort((a, b) => (a.dateCreated > b.dateCreated ? -1 : 1));
}

export function getAllPostMetas(): PostMeta[] {
  return getAllPosts().map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  const indexPath = path.join(POSTS_DIR, slug, "index.md");
  if (!fs.existsSync(indexPath)) {
    return undefined;
  }
  return readPost(slug);
}

export function getAllPostSlugs(): string[] {
  return getPostDirectories();
}

