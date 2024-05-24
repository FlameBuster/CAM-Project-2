import React from "react";
import styles from "./DonationItems.module.scss";

function DonationItems(props) {
  return (
    <React.Fragment>
      <div className={styles.container} style={{}}>
        <div className={styles.mainWrapper}>
          <h3>{props.heading}</h3>
          <button>Donate Now</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DonationItems;
