// pages/pdf-details.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PdfDetailsPage from "../components/PdfDetailsPage";

const PdfDetails = () => {
  const [pdfDetails, setPdfDetails] = useState([]);

  useEffect(() => {
    // Fetch PDF details when the component mounts
    fetchPdfDetails();
  }, []);

  const fetchPdfDetails = async () => {
    try {
      // Fetch PDF details from the server
      const response = await axios.get("http://localhost:8080/pdf/details");
      setPdfDetails(response.data);
    } catch (error) {
      console.error("Error fetching PDF details:", error);
    }
  };

  const showPdf = (id) => {
    // Redirect to the PDF viewer page with the selected PDF ID
    window.location.href = `/pdf-viewer?id=${id}`;
  };

  return (
    <div>
      <h1>PDF Details Page</h1>
      <PdfDetailsPage pdfDetails={pdfDetails} showPdf={showPdf} />
    </div>
  );
};

export default PdfDetails;
