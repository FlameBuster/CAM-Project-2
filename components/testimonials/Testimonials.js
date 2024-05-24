import React from "react";
import styles from "./Testimonials.module.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Testimonials() {
  return (
    <section className={styles.main}>
      <h2>Donor Testimonials</h2>
      <div className={styles.container}>
        <span>
          <KeyboardArrowLeftIcon className={styles.arrow} />
        </span>
        <div className={styles.item}>
          <div className={styles.img}></div>
          <div className={styles.author}>
            <span>Name of the Donor</span>
            <p>Name of the Donor Testimonial</p>
          </div>
        </div>
        <span>
          <KeyboardArrowRightIcon className={styles.arrow} />
        </span>
      </div>
    </section>
  );
}

export default Testimonials;
