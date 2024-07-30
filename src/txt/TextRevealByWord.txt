import { cn } from "../../Utils";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { FC, ReactNode, useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  // Define words that should have a different color
  const specialWords = ["Software", "Innovation", "Creativity.", "Engineer.", "Collaborate", "Web", "Frontend", "Developer,", "Passion", "Precision.", "Developer."];

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-[1550px] items-center bg-[#000] px-[1rem] py-[5rem]"
        }
      >
        <p
          className={
            "flex flex-wrap  text-[1.8rem] leading-9 text-justify xxl:text-[3.9rem] xxl:leading-[4.4rem] font-extrabold text-white/20 "
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const color = specialWords.includes(word) ? "#EC5938" : undefined;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]} color={color}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  color?: string; // Optional color prop
}

const Word: FC<WordProps> = ({ children, progress, range, color }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-35">{children}</span>
      <motion.span
        style={{ opacity, color }} // Apply color if provided
        className="text-[#B7AA97]"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
