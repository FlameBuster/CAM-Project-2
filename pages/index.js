import React from "react";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/header/Navbar";
import Landing from "../components/landing/Landing";
import Donation from "../components/donation/Donation";
import MakingDifference from "../components/making-difference/MakingDifference";
import Footer from "../components/footer/Footer";

import Testimonials from "../components/testimonials/Testimonials";
import Ribbon from "../components/ribbon/Ribbon";

function index() {
  return (
    <React.Fragment>
      <Navbar />

      <main>
        <Landing />
        <Ribbon />
        <Donation />
        <Ribbon />
        <MakingDifference />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default index;
