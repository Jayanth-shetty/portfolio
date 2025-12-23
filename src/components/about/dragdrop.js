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
  { Icon: DiReact,        x: 80,  y: 50, duration: 16 },
  { Icon: DiGithubBadge, x: -70, y: -10, duration: 18 },
  { Icon: DiHtml5,       x: 60,  y: 30,  duration: 10 },
  { Icon: DiJsBadge,     x: -50, y: 70,  duration: 26 },
  { Icon: DiMongodb,     x: 40,  y: 30, duration: 18 },
  { Icon: SiTailwindcss, x: -60, y: -15, duration: 18 },
  { Icon: IoLogoCss3,    x: 40,  y: -30, duration: 28 },
];

  return (
    <>
      {icons.map(({ Icon, x, y, duration }, i) => (
        <motion.div
          key={i}
          className="flex gap-2 h-min mt-2.5 cursor-grab bg-black text-[0.7rem] text-white max-w-fit rounded-b-xl rounded-t-xl p-1 pl-2 pr-3 sm:text-[1rem]"
          animate={{ x: [0,x, 0], y: [0, y, 0] }}
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
          <Icon key={i} className=" text-[1rem] sm:text-2xl" />
          {Icon.name.replace(/^Di|^Si|^IoLogo/, "").replace("Badge", "")}
        </motion.div>
      ))}
    </>
  );
}
