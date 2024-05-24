import styles from "./MakingDifference.module.scss";

function MakingDifference() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1>CAM features</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/raashan.png"} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non massa vel lorem varius finibus. 
            </p>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/edu.png"} />
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non massa vel lorem varius finibus. </p>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/donate.png"} />
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non massa vel lorem varius finibus. </p>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/plant.png"} />
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non massa vel lorem varius finibus. 
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.gridContainer}>
          {/* <img src="/images/group.png" alt="group" /> */}
        </div>
      </div>
    </section>
  );
}

export default MakingDifference;
