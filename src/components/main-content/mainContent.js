import Button from "../buttons/button";
import classes from "./maincontent.module.css";
import ProfilePicture from "./profile/profilePicture";
import SvgIcons from "./svgIcons";
export default function MainContent() {
  
  return (
    <main className={classes.container}>
      <div className={classes.part1}>
        <div className={classes.selfStart}>
          <h1>hey i am jayanth</h1>
          <p>
            I&apos;m a software developer skilled in front-end,focused on
            creating dynamic web experiences. Let&apos;s connect and turn your
            ideas into reality!
          </p>
        </div>
        <div className={classes.selfEnd}>
          <Button action="call" className='black-btn'>Get In Touch</Button>
          <Button action="Resume" className='blue-btn'>Download Resume</Button>
        </div>
      </div>
      <div className={classes.part2}>
        <div className={classes.selfStart}>
          <ProfilePicture />
        </div>
        <div className={classes.selfEnd}>
          <SvgIcons />
        </div>
      </div>
    </main>
  );
}
