import Link from "next/link";
import Image from "next/image";

function MeImg() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-56 md:h-56">
      <Link href="/">
        <Image
          src="/images/me.png"
          alt="Picture of Hector from September 2023"
          width={406}
          height={461}
          priority={true} // fine to have multiple priority images
          className="object-contain w-full h-full"
        />
      </Link>
    </div>
  );
}

export default MeImg;
