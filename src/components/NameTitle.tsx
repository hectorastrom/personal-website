interface NameTitleProps {
    text? : string;
    inline? : boolean;
}

export default function NameTitle({text = "Hector Astrom"} : NameTitleProps) {
    return (
      <>
        <h3 className={`font-title text-2xl sm:text-3xl font-bold text-emphasis -rotate-2 md:-rotate-3`}>
          {text}
        </h3>
      </>
    );
}