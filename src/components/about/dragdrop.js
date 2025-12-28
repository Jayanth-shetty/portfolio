"use client";
import { motion } from "framer-motion";
import { DiGithubBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
export default function DragDrop() {
  const icons = [
    { Icon: DiReact, x: 80, y: 50, duration: 16, title: "react" },
    { Icon: DiGithubBadge, x: -70, y: -10, duration: 18, title: "Github" },
    { Icon: DiHtml5, x: 60, y: 30, duration: 10, title: "Html5" },
    { Icon: DiJsBadge, x: -50, y: 70, duration: 26, title: "JavaScript" },
    { Icon: DiMongodb, x: 40, y: 30, duration: 18, title: "MongoDB" },
    { Icon: SiTailwindcss, x: -60, y: -15, duration: 18, title: "TailwindCss" },
    { Icon: IoLogoCss3, x: 40, y: -30, duration: 28, title: "Css3" },
  ];

  return (
    <>
      {icons.map(({ Icon, x, y, duration, title }, i) => (
        <motion.div
          key={i}
          className="mt-2.5 flex h-min max-w-fit cursor-grab gap-2 rounded-t-xl rounded-b-xl bg-black p-1 pr-3 pl-2 text-[0.7rem] text-white sm:text-[1rem]"
          animate={{ x: [0, x, 0], y: [0, y, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          drag
          dragConstraints={{
            top: -100,
            bottom: 170,
            left: -100,
            right: 30,
          }}
        >
          <Icon key={i} className="text-[1rem] sm:text-2xl" />
          {title}
        </motion.div>
      ))}
    </>
  );
}
