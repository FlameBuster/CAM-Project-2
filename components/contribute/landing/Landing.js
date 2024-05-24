import React from "react";
import styles from "./Landing.module.scss";

function Landing() {
  return (
    <React.Fragment>
      <section className={styles.container}>
        <div className={styles.mainBanner}>
          <h1>
            Dreams Have
            <br />
            No Boundaries
          </h1>
          <div className={styles.overlay}></div>
          <img src={"/images/kid5.png"} />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Landing;
