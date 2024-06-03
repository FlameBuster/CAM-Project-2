import React from "react";
import PropTypes from "prop-types";
import styles from "./details.module.scss";

const handlePdfClick = (id) => {
  window.open(`http://localhost:8080/pdf/fetch/${id}`, "_blank");
};

const MaterialDetails = ({
  materialNo,
  Accession_number,
  Location,
  Page_no,
  No_of_copies,
  Remarks,
  _id,
}) => {
  const {
    Ser_Corps_Inst,
    Est_Br,
    Sub_Publisher,
    Vol,
    Year,
    Collection_type,
    No,
    Loc,
  } = Accession_number || {};

  return (
    <div className={styles.materialDetailsContainer}>
      <h2 className={styles.materialDetailsHeader}>Material Details</h2>
      <div className={styles.materialDetailsContent}>
        <div className={styles.detailColumn}>
          <div className={styles.detailRow}>
            <label>Material No:</label>
            <span>{materialNo}</span>
          </div>
          <div className={styles.detailRow}>
            <label>Location:</label>
            <span>{Location}</span>
          </div>
          <div className={styles.detailRow}>
            <label>Page No:</label>
            <span>{Page_no}</span>
          </div>
          <div className={styles.detailRow}>
            <label>No of Copies:</label>
            <span>{No_of_copies}</span>
          </div>
          <div className={styles.detailRow}>
            <label>Remarks:</label>
            <span>{Remarks}</span>
          </div>
        </div>
        <div className={styles.detailColumn}>
          <div className={styles.detailRow}>
            <label>Accession Number:</label>
            <ul>
              <li>Ser Corps Inst: {Ser_Corps_Inst}</li>
              <li>Est Br: {Est_Br}</li>
              <li>Sub Publisher: {Sub_Publisher}</li>
              <li>Vol: {Vol}</li>
              <li>Year: {Year}</li>
              <li>Collection Type: {Collection_type}</li>
              <li>No: {No}</li>
              <li>Loc: {Loc}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => handlePdfClick(_id)}>
          Open
        </button>
        <button className={styles.button}>Hide</button>
      </div>
    </div>
  );
};

MaterialDetails.propTypes = {
  materialNo: PropTypes.string.isRequired,
  Accession_number: PropTypes.shape({
    Ser_Corps_Inst: PropTypes.string,
    Est_Br: PropTypes.string,
    Sub_Publisher: PropTypes.string,
    Vol: PropTypes.string,
    Year: PropTypes.string,
    Collection_type: PropTypes.string,
    No: PropTypes.string,
    Loc: PropTypes.string,
  }),
  Location: PropTypes.string,
  Page_no: PropTypes.string,
  No_of_copies: PropTypes.string,
  Remarks: PropTypes.string,
  _id: PropTypes.string,
};

export default MaterialDetails;
