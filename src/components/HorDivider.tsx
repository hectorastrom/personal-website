interface HorDividerProps {
  className? : string;
  gradient?: boolean;
}

export default function HorDivider({className, gradient = false} : HorDividerProps) {

    const gradientClass = gradient
      ? "bg-transparent bg-gradient-to-r from-transparent via-slate-500 to-transparent"
      : "bg-slate-500";
    return (
      <>
        <hr className={`${className} my-4 sm:my-2 h-px border-t-0 ${gradientClass} opacity-50`} />
      </>
    );
}