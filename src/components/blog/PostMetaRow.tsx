import { TagPill } from "@/components/blog/TagPill";

type PostMetaRowProps = {
  dateCreated: string;
  dateUpdated?: string;
  tags?: string[];
  className?: string;
  showTags?: boolean;
};

function formatDate(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PostMetaRow({
  dateCreated,
  dateUpdated,
  tags = [],
  className = "",
  showTags = false,
}: PostMetaRowProps) {
  const updatedDiffers = dateUpdated && dateUpdated !== dateCreated;

  return (
    <div className={`flex flex-col gap-2 text-sm text-slate-500 ${className}`}>
      <div className="flex items-center gap-3 w-full">
        <span className="text-left">{formatDate(dateCreated)}</span>
        {updatedDiffers ? (
          <span className="ml-auto text-right">Updated: {formatDate(dateUpdated)}</span>
        ) : (
          <span className="ml-auto text-right" />
        )}
      </div>
      {showTags && tags.length ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

