import Image from "next/image";
import React from "react";
import styles from "./Banner.module.scss";

function Banner({ path, heading, page }) {
  return (
    <section className={styles.container}>
      <img src={path} alt="banner" />
      <div className={styles.padding}>

        <h1 className={page==="contribute" ? styles.donateH : ''}>{heading}</h1>
        {page==='contribute' && <button>Join Us</button>}
      </div>
    </section>
  );
}

export default Banner;
