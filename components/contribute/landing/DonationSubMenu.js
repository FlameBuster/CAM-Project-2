import React from "react";
import DonationItems from "./DonationItems";
import styles from "./DonationSubMenu.module.scss";

function DonationSubMenu() {
  return (
    <React.Fragment>
      <section className={styles.container}>
        <DonationItems heading="Educational Growth" />
        <DonationItems heading="Blood Donation Camp" />
        <DonationItems heading="Ration Bag Projects" />
      </section>
    </React.Fragment>
  );
}

export default DonationSubMenu;
