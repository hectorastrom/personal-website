"use client";

import * as React from "react";

interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className,
  ...props
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.max(rect.width, rect.height) / 2;
      const moveX = (x / distance) * Math.min(distance, maxDistance) * 0.1;
      const moveY = (y / distance) * Math.min(distance, maxDistance) * 0.1;

      card.style.transform = `translate(${moveX}px, ${moveY}px)`;
      card.style.zIndex = "10";
    };

    const handleMouseLeave = () => {
      card.style.transform = "translate(0, 0)";
      card.style.zIndex = "1";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative h-full rounded-lg card transition-transform ease-out duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default HoverCard;
