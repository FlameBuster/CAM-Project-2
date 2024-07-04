import styles from "./Landing.module.scss";
import Banner from "../campaigns/banner/Banner";
function Landing() {
  return (
    <section className={styles.container}>
      <Banner path={"/images/cme.webp"} heading={"Welcome to Corps Archival Museum"} />
    </section>
  );
}

export default Landing;
