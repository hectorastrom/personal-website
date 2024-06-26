'use client';

import { useState } from "react";
import Image from "next/image";
import { FaMousePointer } from "react-icons/fa";

type HoverGifProps = {
  staticImage: string;
  gifImage?: string;
  alt: string;
};

export default function HoverGif({
  staticImage,
  gifImage,
  alt,
}: HoverGifProps) {
  const [gifSrc, setGifSrc] = useState<string>(gifImage || staticImage);

  const handleMouseEnter = () => {
    setGifSrc(staticImage);
    setTimeout(() => {
      setGifSrc(gifImage || staticImage);
    }, 50); // Small delay to reset the GIF
  };

  return (
    <>
      <Image
        src={staticImage}
        width={1600}
        height={900}
        alt={alt}
        priority={true}
        className="absolute left-0 top-0 object-contain w-full h-full rounded-xl"
      />

      {gifImage && (
        <>
          <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-gray-200 rounded-lg shadow-md px-2 py-1 flex items-center space-x-1">
            <FaMousePointer className="text-emphasis" />
            <span>GIF</span>
          </div>
          <Image
            src={gifSrc}
            width={1600}
            height={900}
            alt={alt}
            className="absolute opacity-0 hover:opacity-100 transition-opacity duration-300 delay-200 left-0 top-0 object-contain w-full h-full rounded-xl"
            priority={true}
            unoptimized={true}
            onMouseEnter={handleMouseEnter}
          />
        </>
      )}
    </>
  );
}
