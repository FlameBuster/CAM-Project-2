import React from "react";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  return (
    <form className={styles.form}>
      <h2>SEND US A MESSAGE </h2>
      <div className={styles.inputFields}>
        <div>
          <input type={"text"} placeholder={"Name"} />
          <input type={"text"} placeholder={"Email"} />
        </div>
        <input type={"text"} placeholder={"Subject"} />
        <input type={"text"} placeholder={"Message"} />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
