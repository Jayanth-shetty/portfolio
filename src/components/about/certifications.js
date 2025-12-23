"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
export default function Certifications({ arr }) {
  return (
    <div className="flex flex-wrap gap-5 mb-28 items-center justify-center w-full">
      {arr.map((text, i) => (
        <Link key={i} href={text.url} target="_blank" className="bg-white rounded-2xl h-70 sm:w-1/3 lg:w-1/4 w-full relative overflow-hidden border border-gray-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2"><motion.div
          key={i}
          // className="bg-white rounded-2xl h-70 sm:w-1/3 lg:w-1/4 w-full relative overflow-hidden border border-gray-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2"
          initial="rest"
          animate="anime"
          whileHover="hover"
        >
          <motion.div
            variants={{
              rest: { scale: 0 },
              anime:{scale:4},
              hover: { scale: 10 },
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="absolute z-1 top-4 right-4 w-6 h-6 bg-gray-900 rounded-full origin-center"
          />
          <div className="ml-7 bottom-1.5 relative z-30 text-black">
            <span className="flex flex-row-reverse p-5 text-purple-100 hover:text-purple-300">
              <FaCircleArrowRight size={22} />
            </span>
            <Image src={text.image} alt={text.title} width={150} height={80} className="object-contain"/>
            <h1 className="font font-bold">{text.title}</h1>
            <h2>{text.issuer}</h2>
            <p>{text.year}</p>
          </div>
        </motion.div>
        </Link> 
      ))}
    </div>

  );
}
