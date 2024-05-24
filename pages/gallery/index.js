    import React from "react";
import Footer from "../../components/footer/Footer";
import Grid from "../../components/gallery/Grid";
import Navbar from "../../components/header/Navbar";
import styles from "./Gallery.module.scss";


function Gallery() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Grid/>       
      </main> 
      <Footer />
    </React.Fragment>
  );
}

export default Gallery;
