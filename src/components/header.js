"use client";
import { useEffect, useRef, useState } from "react";
import Li from "./Lists/Li";
import classes from "./header.module.css";
import MenuBar from "./Lists/mobileMenu";
import { IoIosMenu } from 'react-icons/io'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Header() {
  const [visible, setVisible] = useState(false);
  function onHandelVisible() {
    setVisible((prev) => !prev);
  }
  const navRef = useRef(null);
  useEffect(() => {
    function handelOutClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setVisible(false);
      }
    }
    if (visible) {
      document.addEventListener("click", handelOutClick);
    }
    return () => document.removeEventListener("click", handelOutClick);
  }, [visible]);

  return (
    <nav className={classes.nav}>
      <Li href={"/"}>
        <span className="Gspan">JAYANTH</span>
      </Li>
      <MenuBar mobile={visible} />
      <div className={classes.fend}>
        <Li href="https://wa.me/918867094596" target="_blank">
          <IoLogoWhatsapp className="IC" />
        </Li>
        <Li onClick={onHandelVisible} className={classes.menuIcon}>
          <IoIosMenu className="IC" />
        </Li>
      </div>
      {visible && (
        <div onClick={onHandelVisible} className={classes.nav2} ref={navRef}>
          <MenuBar mobile={visible} />
        </div>
      )}
    </nav>
  );
}
