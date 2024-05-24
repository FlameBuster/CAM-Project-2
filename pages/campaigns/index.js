import React, { useState } from "react";
import axios from "axios";
import Banner from "../../components/campaigns/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./Campaigns.module.scss";

function Campaigns({ files }) {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handlePdfClick = (id) => {
    window.open(`http://localhost:8080/pdf/fetch/${id}`, "_blank");
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
    // Handle error fetching data, you might want to provide some fallback or default behavior
  }

  return {
    props: {
      files: files,
    },
  };
}

export default Campaigns;
