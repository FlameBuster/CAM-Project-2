import React from "react";
import Footer from "../../components/footer/Footer";
import Grid from "../../components/gallery/Grid";
import Navbar from "../../components/header/Navbar";
import styles from "./Gallery.module.scss";
import Ribbon from "../../components/ribbon/Ribbon";

function Gallery() {
  return (
    <React.Fragment>
      <Navbar />
      <Ribbon />
      <main className={styles.mainContent}>
        <div className={styles.heading}>
          <h1>Welcome to the Gallery section of the Corps Archives Museum!</h1>
          <p>
            <br></br> Enter a realm where art and history converge, offering a
            profound tribute to the valor, strategy, and resilience of the armed
            forces. The Military Gallery is a meticulously curated collection
            for enthusiasts, historians, and admirers of military artistry and
            heritage. Below, you’ll explore an array of visual narratives that
            capture the essence of military life, from heroic battles and
            strategic brilliance to the personal stories of service and
            sacrifice. Our gallery spans centuries of military history,
            showcasing works that range from detailed depictions of historic
            campaigns to the poignant portrayals of everyday moments in the
            lives of soldiers. Each piece in our collection serves as a
            testament to the bravery, ingenuity, and fortitude that have shaped
            military traditions and tactics over the years.<br/> Discover the
            artistry behind military uniforms, the evolution of weaponry, and
            the strategic landscapes of historic battlefields. Marvel at the
            skillful representations of military machinery, the solemnity of war
            memorials, and the inspiring portraits of decorated heroes. Whether
            you're captivated by the intricate details of a battlefield
            painting, the evocative power of a military sculpture, or the
            symbolic strength of a commemorative piece, our gallery offers a
            deep dive into the visual history of military excellence. As you
            journey through our exhibits, you'll encounter the works of renowned
            military artists and contemporary visionaries, each contributing to
            a vivid portrayal of military heritage. Experience the stories of
            courage and camaraderie, the strategies that changed the course of
            history, and the personal sacrifices that underpin the spirit of
            service. Welcome to a space where military history is brought to
            life through art – welcome to the Military Gallery of the Corps
            Archives Museum.
          </p>
        </div>
        <Grid />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Gallery;
