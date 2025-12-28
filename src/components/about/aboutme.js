"use client";
import { motion } from "framer-motion";
import Certifications from "./certifications";
import ReactImg from "./certify/React.jpg";
import ForgeImg from "./certify/forge.jpg";
import GenAiImg from "./certify/GenAi.jpg";
import DragDrop from "./dragdrop";
const me = {
  about: [
    "ABOUT ME",
    "Hi, I'm Jayanth B. A React developer with hands-on project experience, specializing in building dynamic and responsive web applications. I focus on front-end development to create seamless user experiences and solve real-world problems. I’m passionate about continuous learning and enjoy collaborating with teams to turn ideas into impactful solutions.",
    "Skills:",
    "certifications:",
  ],
  certifications: [
    {
      title: "React Developer Certification",
      image: ReactImg,
      issuer: "Udemy",
      year: "2025",
      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-ff6e35d1-e57c-4268-971f-ef5ce5d9cf8c.jpg",
    },
    {
      title: "Frontend Web Development",
      image: ForgeImg,
      issuer: "Skyscanner",
      year: "2025",
      url: "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_LQ5TKvjw6gdRnmu9q_1756799111514_completion_certificate.pdf",
    },
    {
      title: "Generative Ai",
      image: GenAiImg,
      issuer: "Nxt wave",
      year: "2025",
      url: "https://ibb.co/XxZ5Td6N",
    },
  ],
};
export default function About() {
  return (
    <div className="mt-25 flex h-full w-full flex-col items-center gap-10 overflow-x-hidden px-10">
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col justify-between"
      >
        <h1 className="p-3.5 font-serif text-4xl font-bold text-black sm:text-6xl">
          {me.about[0]}
        </h1>
        <p className="mt-7 mb-3 border-l-10 border-purple-600 pl-2 font-serif sm:ml-10 sm:text-lg lg:w-8/12">
          {me.about[1]}
        </p>
        <span className="mt-2.5 text-2xl font-bold">{me.about[2]}</span>
      </motion.div>
      <div className="mt-1.5 flex h-2/6 w-full flex-wrap bg-gray-900 p-7 sm:h-32">
        <DragDrop />
      </div>
      <h1 className="mt-3 mb-7 self-start text-3xl font-bold">{me.about[3]}</h1>
      <motion.div
        className="mb-28 flex w-full flex-wrap items-center justify-center gap-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
      >
        <Certifications arr={me.certifications} />
      </motion.div>
    </div>
  );
}
