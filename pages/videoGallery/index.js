import React from "react";
import Footer from "../../components/footer/Footer";
import Grid from "../../components/videoGal/Grid";
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
          <h1>Welcome to the Gallery Section of the Corps Archives Museum!</h1>
          <p>
            <br></br> Welcome to a dynamic space where history unfolds through
            the lens of time and technology. The Military Video Gallery is a
            curated collection of compelling visual stories, meticulously
            preserved for enthusiasts, historians, and those captivated by the
            narratives of military life. Below, you'll find an extensive archive
            of videos documenting the strategic brilliance, heroic deeds, and
            personal sacrifices that define our armed forces. Our gallery
            features footage spanning decades, capturing everything from pivotal
            battles and military maneuvers to the day-to-day lives of servicemen
            and women. Experience the evolution of military tactics, witness the
            advancement of technology, and delve into personal accounts of
            courage and resilience, all brought to life through the power of
            film. Discover the dramatic reenactments of historic campaigns,
            insightful documentaries that explore the intricacies of military
            strategy, and interviews with veterans who share their firsthand
            experiences. Each video in our collection offers a unique
            perspective, providing a deeper understanding of the challenges and
            triumphs that have shaped military history. Whether you're intrigued
            by the strategic genius behind landmark victories, the development
            of groundbreaking weaponry, or the personal stories of valor and
            brotherhood, our video gallery offers an immersive journey into the
            world of military excellence. Watch as history comes alive through
            rare archival footage, cinematic portrayals, and contemporary
            recordings that honor the legacy of our armed forces. As you explore
            our gallery, you'll encounter the works of acclaimed filmmakers,
            historians, and veterans, each contributing to a vivid portrayal of
            military heritage. Experience the intensity of battle, the solemnity
            of remembrance, and the enduring spirit of those who serve. Welcome
            to a place where the past and present converge through moving images
            – welcome to the Military Video Gallery of the Corps Archives
            Museum.
          </p>
        </div>
        <Grid />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Gallery;
