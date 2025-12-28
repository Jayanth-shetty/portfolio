import { useRef } from "react";
import { MdOutlineLaunch } from "react-icons/md";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import Link from "next/link";
export default function Card({ project, color }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blurContent = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <div
      key={project.id}
      ref={ref}
      className="grid grid-cols-1 items-center py-20 sm:grid-cols-2 sm:py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blurContent}px)`,
          scale,
        }}
        className="order-2 flex flex-col gap-5 sm:order-1"
      >
        <motion.h2
          className="text-2xl font-bold text-white sm:text-4xl"
          style={{ color }}
        >
          {project.title}
        </motion.h2>
        <p className="text-neutral-400 sm:text-lg">{project.desc}</p>
        <motion.div>
          <Link href={project.url} target="_blank">
            <h2 className="flex w-24 items-center justify-between rounded-2xl bg-gray-950 p-3 font-bold text-white">
              Launch
              <span>
                <MdOutlineLaunch />
              </span>
            </h2>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
        className="order-1 sm:order-2"
      >
        {project.content}
      </motion.div>
    </div>
  );
}
