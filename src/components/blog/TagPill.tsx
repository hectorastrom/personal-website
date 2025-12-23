type TagPillProps = {
  label: string;
};

export function TagPill({ label }: TagPillProps) {
  return (
    <span className="text-xs uppercase tracking-wide rounded-full bg-slate-200 text-slate-700 px-3 py-1">
      {label}
    </span>
  );
}

