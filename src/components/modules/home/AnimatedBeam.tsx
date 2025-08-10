"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import img1 from "../../../app/assests/img/pro1.png";
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative text-white flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex text-white size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-16">
            <Image
              className="rounded-full"
              src={img1}
              alt="img"
              width={300}
              height={300}
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center text-white">
          <Circle ref={div6Ref} className="size-16">
            <Image
              className="rounded-full"
              src="https://i.postimg.cc/zfbQ36HM/0-Hdm7h-BTZ-h-Klbtl-V.png"
              alt="img"
              width={300}
              height={300}
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2 text-white">
          <Circle ref={div1Ref}>
            <Image
              className="rounded-full"
              src="https://i.postimg.cc/rs8gGPzq/redux.png"
              alt="img"
              width={300}
              height={300}
            />
          </Circle>
          <Circle ref={div2Ref}>
            <Image
              className="rounded-full"
              src="https://i.postimg.cc/C51kxTzn/images.png"
              alt="img"
              width={300}
              height={300}
            />
          </Circle>
          <Circle ref={div3Ref}>
            <Image
              className="rounded-full"
              src="https://i.postimg.cc/W3Jd4GVj/express-js.png"
              alt="img"
              width={300}
              height={300}
            />
          </Circle>
          <Circle ref={div4Ref}>
            <Image
              className="rounded-full"
              src="https://i.postimg.cc/fRtnpBfw/images-1.png"
              alt="img"
              width={300}
              height={300}
            />
          </Circle>
          <Circle ref={div5Ref}>
            <Image
              className="rounded-full"
              src="https://i.postimg.cc/ZYxTx7V2/images.jpg"
              alt="img"
              width={300}
              height={300}
            />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}
