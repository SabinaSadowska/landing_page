import React from "react";
import styles from "./navigation.module.css";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Typography type="blackSmall" text="Muse.ic"></Typography>
        <Typography type="greySmall" text="Features"></Typography>
        <Typography type="greySmall" text="Pricing"></Typography>
        <Typography type="greySmall" text="Library"></Typography>
        <Typography type="greySmall" text="Explore"></Typography>
      </div>

      <Button buttonType="white" text="Get Started" type="blue"></Button>
    </div>
  );
}

export default Navigation;
