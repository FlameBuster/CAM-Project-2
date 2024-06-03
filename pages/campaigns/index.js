import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../components/campaigns/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./Campaigns.module.scss";
import MaterialDetails from "../../components/pdf-details/details";

function Campaigns({ files }) {
  const [selectedPdfData, setSelectedPdfData] = useState(null);

  // Function to fetch PDF data from MongoDB based on file ID
  const fetchPdfData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/pdf/data/fetch/${id}`
      );
      
      const mergedProps = {
        ...response.data.metadata, // Spread existing metadata properties
        _id: id // Add _id property with the provided id value
      };

      setSelectedPdfData(mergedProps);
      
    } catch (error) {
      console.error("Error fetching PDF data:", error);
    }
  };

  // Function to handle click event on file link
  const handlePdfClick = (id) => {
    fetchPdfData(id);
    // Fetch PDF data when a file link is clicked
  };

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <div className={styles.mainContent}>
          <div className={styles.heading}>
            <h1>
              Welcome to the Archives section of the Corps Archives Museum!
            </h1>
            <p>
              <br></br> Delve into a treasure trove of military history
              meticulously preserved for enthusiasts, scholars, and history
              buffs alike. Below, you'll discover a rich collection of
              artifacts, documents, and records spanning decades of military
              heritage. From the annals of strategic campaigns to the personal
              narratives of brave servicemen and women, our archives offer a
              profound insight into the triumphs and challenges that have shaped
              the course of history. Whether you're seeking to uncover the
              intricacies of military tactics, explore the evolution of
              weaponry, or simply immerse yourself in the stories of valor and
              sacrifice, our archives stand as a testament to the enduring
              spirit of courage and resilience. Journey through the corridors of
              time and uncover the untold tales that have shaped the world we
              live in today. Welcome to a world where history comes alive –
              welcome to the Archives of the Corps Archives Museum.
            </p>
          </div>
          <section className={styles.campaignList}>
            <h2>List of Files:</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <a href="#" onClick={() => handlePdfClick(file.id)}>
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {/* Render MaterialDetails component if PDF data is fetched */}
          {console.log(selectedPdfData)}
          {selectedPdfData && (
  <MaterialDetails
    materialNo={selectedPdfData.metadata.materialNo}
    Accession_number={selectedPdfData.metadata.Accession_number}
    Location={selectedPdfData.metadata.Location}
    Page_no={selectedPdfData.metadata.Page_no}
    No_of_copies={selectedPdfData.metadata.No_of_copies}
    Remarks={selectedPdfData.metadata.Remarks}
    _id={selectedPdfData._id}
  />
)}
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let files = [];

  try {
    const response = await axios.get("http://localhost:8080/pdf/fetch/");
    files = response.data.map((file) => ({
      id: file.id,
      name: file.filename,
    }));
  } catch (error) {
    console.error("Error fetching files:", error);
  }

  return {
    props: {
      files: files,
    },
  };
}

export default Campaigns;
