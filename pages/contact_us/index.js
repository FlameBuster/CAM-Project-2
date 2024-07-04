import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import ContactForm from "../../components/contact-us/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import Location from "../../components/map/Map";
import styles from "./ContactUs.module.scss";
import Ribbon from "../../components/ribbon/Ribbon";

function ContactUs() {
  return (
    <React.Fragment>
      <Navbar />
    
      <main>
      
        <Banner path={"/images/army47.webp"} heading={"Join INDIAN ARMY"} />
        <section className={styles.mainContainer}>
          <h2>If you would like to join us .</h2>
          <div className={styles.credentialsList}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/map.png"} alt="icon" />
              </div>
              <a href="https://maps.app.goo.gl/EMpA2yX4VyoYbKJj9">
                <p>CME</p>
              </a>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/call.png"} alt="icon" />
              </div>
              <a href="tel:+91-9999999999">+91-9999999999</a>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/mail.png"} alt="icon" />
              </div>
              <a href="mailto:">
                <p>cme@gmail.com</p>
              </a>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/insta.png"} alt="icon" />
              </div>
              <a href="">cme</a>
            </div>
            {/* <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/linkedin.png"} alt="icon" />
              </div>
              <p>RandomText@gmail.com</p>
            </div> */}
          </div>
        </section>
        <section className={styles.map}>
          <Location />
        </section>
        <section className={styles.contactForm}>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default ContactUs;
