import Li from "./Li.js";
import classes from "@/components/header.module.css";
export default function MenuBar({ mobile }) {
  return (
    <ul className={`${classes.ul} ${mobile ? classes.mobileUl : ""}`}>
      <Li href={"/"}>HOME</Li>
      <Li href={"/about-Me"}>ABOUT</Li>
      <Li href={"/projects"}>PROJECTS</Li>
    </ul>
  );
}
