// PdfDetailsPage.js
import React from "react";

const PdfDetailsPage = ({ pdfDetails, showPdf }) => {
  return (
    <div>
      <h2>PDF Details</h2>
      <ul>
        {pdfDetails.map((pdf, index) => (
          <li key={index}>
            <div>{pdf.name}</div>
            <div>{pdf.description}</div>
            <button onClick={() => showPdf(pdf.id)}>Show PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfDetailsPage;
