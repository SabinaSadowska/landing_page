import React from "react";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import styles from "./albums.module.css";

function Albums() {
  return (
    <div className={styles.container}>
      <Typography type="whiteBig" text="The world’s best quality audio ever." />

      <Typography type="white" text="Top notch sound" />
      <Typography
        className={styles.description}
        type="white"
        text="Over 100 years of research has led us to develop new quality, which is 100x times better than FLAC."
      />
    </div>
  );
}

export default Albums;
