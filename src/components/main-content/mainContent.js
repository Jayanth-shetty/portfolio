"use client";
import { motion } from "framer-motion";
import Button from "../buttons/button";
import TypingEffect from "../typingEffect/typing";
import classes from "./maincontent.module.css";
import ProfilePicture from "./profile/profilePicture";
import Icons from "./icons";

export default function MainContent() {
  return (
    <main className={classes.container}>
      <div className={classes.part1}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={classes.selfStart}
        >
          <h1 className="font-serif">Hey,I&apos;m Jayanth</h1>
          <TypingEffect />
          <h3 className="typing-wrapper">DEVELOPER</h3>
          <p className={classes.summary}>
            I&apos;m a software developer skilled in front-end,focused on
            <br />
            creating dynamic web experiences.
            <br /> Let&apos;s connect and turn your ideas into reality!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={classes.selfEnd}
        >
          <Button action="call" className="black-btn">
            Get In Touch
          </Button>
          <Button action="Resume" className="blue-btn">
            Download Resume
          </Button>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        className={classes.part2}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
          className={classes.selfStart}
        >
          <ProfilePicture />
        </motion.div>
        <motion.div>
          <Icons />
        </motion.div>
      </motion.div>
    </main>
  );
}
