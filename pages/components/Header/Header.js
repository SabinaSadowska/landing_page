import React from "react";
import styles from "./header.module.css";
import Navigation from "../Navigation/Navigation";
import Image from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

function Header() {
  return (
    <div className={styles.container}>
      <Navigation />
      <img
        className={styles.blueElement}
        src="/images/Circle.png"
        alt="Blue circle"
      ></img>
      <img
        className={styles.headphones}
        src="/images/headphones.png"
        alt="Headphones"
      ></img>
      <img
        className={styles.yellowElement}
        src="/images/Circle_yellow.png"
        alt="Circle_yellow"
      ></img>
      <img
        className={styles.pinkElement}
        src="/images/Circle_pink.png"
        alt="Circle_pink"
      ></img>
      <div className={styles.header_container}>
        <div className={styles.text_dot}>
          <Typography
            type="blackBig"
            text="Listen Like Never Before"
          ></Typography>
          <p className={styles.header_dot}></p>
        </div>

        <Typography
          type="greySmall"
          text="We offer music in 100x better quality than our competitors. Say good bye to FLAC"
        ></Typography>
        <Button buttonType="blue" text="Get Started" type="white" />
      </div>
    </div>
  );
}

export default Header;
