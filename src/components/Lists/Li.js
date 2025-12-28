"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "@/components/Lists/lists.module.css";
export default function Li({ children, href, ...props }) {
  const path = usePathname();
  let active = false;
  if (href === "/") {
    active = path === "/";
  } else {
    active = path.startsWith(href);
  }

  if (!href) {
    return (
      <motion.li
        whileHover={{ y: -2 }}
        className={`${classes.li} ${active ? classes.active : undefined}`}
        {...props}
      >
        {children}
      </motion.li>
    );
  }
  return (
    <motion.li
      whileHover={{ y: -2 }}
      className={`${classes.li} ${active ? classes.active : undefined}`}
      {...props}
    >
      <Link href={href} className={classes.link}>
        {children}
      </Link>
      {active && (
        <motion.div
          layoutId="nav-underline"
          className={classes.activeBlob}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        ></motion.div>
      )}
    </motion.li>
  );
}
