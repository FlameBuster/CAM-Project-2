// PDFDetailsPage.js
import React from "react";
import MaterialDetails from "../../components/pdf-details/details";

const sampleData = {
  materialNo: "12345",
  Accession_number: {
    Ser_Corps_Inst: "12",
    Est_Br: "2",
    Sub_Publisher: "121",
    Vol: "2",
    Year: "12",
    Collection_type: "121",
    No: "2",
    Loc: "12",
  },
  Location: "Pune",
  Page_no: "1",
  No_of_copies: "12",
  Remarks: "Some remarks",
};

const PDFDetailsPage = ({ pdfData }) => {
  return (
    <div>
      <h1>PDF Details</h1>
      <MaterialDetails {...sampleData} />
    </div>
  );
};

export default PDFDetailsPage;
