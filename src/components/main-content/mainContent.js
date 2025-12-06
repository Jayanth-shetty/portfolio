import classes from "./maincontent.module.css";
import ProfilePicture from "./profile/profilePicture";
import SvgIcons from "./svgIcons";
export default function MainContent() {
  return (
    <main className={classes.container}>
      <div className={classes.part1}>
        <div className={classes.selfStart}>
          <h1>hey i am jayanth</h1>
          <h1>scscs</h1>
        </div>
        <div className={classes.selfEnd}>
          <button>Get in touch</button>
        </div>
      </div>
      <div className={classes.part2}>
        <div className={classes.selfStart}><ProfilePicture /></div>
        <div className={classes.selfEnd}>
          <SvgIcons />
        </div>
      </div>
    </main>
  );
}
