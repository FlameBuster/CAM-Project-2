import styles from "./Donation.module.scss";

function Donation() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src="/images/cme-up.jpeg" alt="hi"></img>
      </div>
      <div className={styles.right}>
        <h1>About College of Military Engineering</h1>
        <p>
          Located within the prestigious College of Military Engineering in
          Pune, India, the Corps Archives Museum stands as a testament to the
          rich history and legacy of the institution. Founded with a vision to
          preserve and showcase the remarkable contributions of the College, our
          museum serves as a gateway to the past, present, and future of
          military engineering excellence.
          <br></br>From pioneering technological advancements to tales of valor
          and sacrifice, our exhibits encapsulate the spirit of the College and
          its esteemed alumni.
          <br /> Discover the stories of resilience, ingenuity, and camaraderie
          that have shaped the College of Military Engineering into a beacon of
          knowledge and expertise in the field of military engineering. With
          each artifact and display, we invite you to embark on a journey of
          exploration and enlightenment, honoring the legacy of those who have
          gone before us.
        </p>
      </div>
    </section>
  );
}

export default Donation;
