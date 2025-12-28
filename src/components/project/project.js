"use client";
import { use, useRef, useState } from "react";
import { useMotionValueEvent, motion, useScroll } from "framer-motion";
import projectList from "./projectList";
import Card from "./card";
export default function ProjectsCollection() {
  const ref = useRef(null);
  const textColors = ["#000000", "#ffffff", "#ffffff", "#ffffff"];
  const backgrounds = ["#ffffff", "#05291c", "#343434", "#000000"];
  const [background, setBackground] = useState(backgrounds[0]);
  const [textColor, setTextColor] = useState(textColors[0]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const bgValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[bgValue]);
    setTextColor(textColors[bgValue]);
  });
  return (
    <motion.div
      ref={ref}
      animate={{
        background,
      }}
      className="flex min-h-screen items-center justify-center overflow-hidden bg-neutral-900"
    >
      <div className="relative mx-auto flex max-w-4xl flex-col gap-5 sm:py-40">
        {projectList.map((project) => (
          <Card key={project.id} project={project} color={textColor} />
        ))}
      </div>
    </motion.div>
  );
}
