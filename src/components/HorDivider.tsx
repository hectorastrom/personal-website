interface HorDividerProps {
  className? : string
}

export default function HorDivider({className} : HorDividerProps) {
    return (
      <>
        <hr className={`${className} my-4 sm:my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400`} />
      </>
    );
}