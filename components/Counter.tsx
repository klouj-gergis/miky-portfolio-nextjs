"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";


export default function Counter({ start = 0, end = 100, duration = 2000, title }: { start?: number; end?: number; duration?: number, title?: string }) {

   const [value, setValue] = useState(start);
  const ref = useRef(start);
  const elRef = useRef(null);

  // Watch the actual element
  const isInView = useInView(elRef, { once: false });

  const counter = end / 200;

  const count = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + counter);
      setValue(result);
      ref.current = result;

      setTimeout(count, duration / (end - start)); // continue
    }
  };

  useEffect(() => {
    if (isInView) {
      // Reset when entering the viewport
      ref.current = start;
      setValue(start);

      count();
    }
  }, [isInView, start, end]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-[1.2rem] lg:text-[3.7rem]">{title}</h3>
        <p className="text-[2rem] lg:text-8xl" ref={elRef}>{value}+</p>
      </div>
    </>
  )
}
