import styles from "./Landing.module.scss";

function Landing() {
  return (
    <section className={styles.container}>
      <div className={styles.start}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <h1>
            Welcome to Corps Archives Museum!
            </h1>
            <div className={styles.filler}>
              <p></p>
              <div className={styles.box}></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={"/images/cme.webp"} />
        </div>
      </div>
      <div className={styles.end}>
        <img src={"./images/landing-end.svg"} />
      </div>
    </section>
  );
}

export default Landing;
