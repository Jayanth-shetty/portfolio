"use client";
import { delay, motion } from "framer-motion";
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
    <div className="flex mt-25 items-center flex-col gap-10 w-full h-full overflow-x-hidden px-10">
      <div className="flex flex-col justify-between w-full">
        <h1 className="font-serif text-4xl sm:text-6xl text-black font-bold p-3.5">
          {me.about[0]}
        </h1>
        <p className=" mt-7 mb-3 pl-2 font-serif sm:text-lg  border-l-10 sm:ml-10 border-purple-600 lg:w-8/12">
          {me.about[1]}
        </p>
        <span className="mt-2.5 text-2xl font-bold">{me.about[2]}</span>
      </div>
      <div className="flex flex-wrap w-full mt-1.5 p-7 bg-gray-900 h-2/6 sm:h-32">
        <DragDrop />
      </div>
      <h1 className="text-3xl mt-3 mb-7 self-start font-bold">{me.about[3]}</h1>
      <motion.div
        className="flex flex-wrap gap-5 mb-28 items-center justify-center w-full"
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{amount:0.3}}
      >
        <Certifications arr={me.certifications} />
      </motion.div>
    </div>
  );
}
