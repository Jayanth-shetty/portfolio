"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const icons = [
  { Icon: FaGithubSquare, url: "https://github.com/Jayanth-shetty" },
  { Icon: FaLinkedin, url: "https://www.linkedin.com/in/jayanthbb/" },
  {
    Icon: FaInstagramSquare,
    url: "https://www.instagram.com/lethargic_hacker/",
  },
  {
    Icon: FaFacebookSquare,
    url: "https://www.facebook.com/jayanth.shettty.9421",
  },
];
export default function Icons() {
  return (
    <motion.ul
      variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
      className="mb-7 flex w-full flex-row items-center justify-around"
    >
      {icons.map(({ Icon, url }, i) => (
        <motion.li
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 0.9 },
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          className="list list-none"
          key={i}
        >
          {" "}
          <Link href={url} target="_blank">
            <Icon className="icon" />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
