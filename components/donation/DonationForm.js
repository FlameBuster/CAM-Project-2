import styles from "./DonationForm.module.scss";

import React, { useEffect } from "react";
import { useState } from "react";

function DonationForm() {
  const [val, setVal] = useState();
  const [showUPI, setShowUPI] = useState(false);
  const [isAmt, setIsAmt] = useState(true);
  useEffect(()=>{
    setIsAmt(true)
  }, [val])

  return (
    <>
      {showUPI && (
        <div className={styles.QRcontainer}>
          <h2>Amount: {val}</h2>
          <div className={styles.wrapper2}>
            <img src={"/images/qr2.png"} className={styles.QRimg} />
            <button
              className={styles.btn}
              onClick={() => {
                setShowUPI(false);
                setIsAmt(true);
                setVal();
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
      {!showUPI && (
        <div className={styles.container}>
          <h2>Help Us Give the Power to Choose in a Child’s Hands</h2>
          <div className={styles.wrapper}>
            <ul className={styles.amtBox}>
              <li
                onClick={() => {
                  setVal(3600);
                }}
              >
                <span>&#8377;</span>3600
              </li>
              <li
                onClick={() => {
                  setVal(10800);
                }}
              >
                <span>&#8377;</span>10800
              </li>
              <li
                onClick={() => {
                  setVal(18000);
                }}
              >
                <span>&#8377;</span>18000
              </li>
            </ul>
            <div className={styles.amtValWrapper}>
              <div className={styles.sign}>
                <span>&#8377;</span>
              </div>
              <input
                type="number"
                placeholder="Other Amount"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                if (!val) {
                  return setIsAmt(false);
                }
                setShowUPI(true);
              }}
            >
              DONATE
              <img src={"/images/donate.svg"} />
            </button>
            {!isAmt && (
              <span
                style={{ display: "block", marginTop: "10px", color: "red" }}
              >
                Please enter a valid number
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default DonationForm;
