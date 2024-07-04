import React from "react";
import styles from "./ribbon.module.scss"; // Import the CSS

const Ribbon = () => {
  return (
    <div className={styles.end}>
      <img src={"./images/newl.svg"} alt="Ribbon end" />
    </div>
  );
};

export default Ribbon;
