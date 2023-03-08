// import { useEffect, useRef } from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
//import demo from "C:\\Users\\ASUS\\Downloads\\Karma-KMCT\\src\\components\\video\\demo.mp4";

const Hero = () => {
  // const [countDays, setDays] = useState(false);
  // const [countHours, setHours] = useState(false);
  // const [countMinutes, setMinutes] = useState(false);
  // const [countSeconds, setSeconds] = useState(false);

  // let interval = useRef();

  // const startTimer = () => {
  //   const countdownDate = new Date("May 21 2022 18:00:00").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance / 1000 / 60) % 60);
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       //
  //       clearInterval(interval);
  //     } else {
  //       setDays(days);
  //       setHours(hours);
  //       setMinutes(minutes);
  //       setSeconds(seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          {/* <video>
            <source src={demo} type="video/mp4">

            </source>
          </video> */}
          <h1 className={classes.heading}>CommUniq 2k23</h1>
          <h4 className={classes.caption}>What goes around comes around</h4>
          <p className={classes.date}>MARCH 28&29, 2023</p>
          <Link className={classes.anchorBtn} target="_blank" rel="noopener noreferrer" to="/tickets">
            <button className={classes.btn}>Tickets on sale now !</button>
          </Link>
        </div>

        {/* <div className={classes.countdownbox}>
          <div className={classes.countdown}>
            <p>{countDays}</p>
            <p>
              <small>days</small>
            </p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countHours}</p>
            <p>hours</p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countMinutes}</p>
            <p>min</p>
          </div>

          <span className={classes.column}>:</span>
          <div className={classes.countdown}>
            <p>{countSeconds}</p>
            <p>sec</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
