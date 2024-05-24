import React, {useState} from "react";
import styles from "./CampaignList.module.scss";

function CampaignList({ title, content, hotBanner }) {
  
  return (
    <div className={styles.container}>
      <div>
      {hotBanner && <span className={styles.hotFlag}> @ signature drive</span>}
        <h2 className={hotBanner  && styles.hotBanner}>{title}</h2>
        <p className={styles.content}>
        {content}
        </p>
      </div>
    </div>
  );
}

export default CampaignList;
