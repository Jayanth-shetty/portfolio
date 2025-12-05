import Link from "next/link";
import classes from "@/components/Lists/lists.module.css";
export default function Li({ children, href, active, ...props }) {
  if (!href) {
    return (
      <li
        className={`${classes.li} ${active ? classes.active : undefined}`}
        {...props}
      >
        {children}
      </li>
    );
  }
  return (
    <li
      className={`${classes.li} ${active ? classes.active : undefined}`}
      {...props}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
