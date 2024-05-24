import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import Navbar from "../../components/header/Navbar";
import styles from "./Contribute.module.scss";
import JoinUs from "./JoinUs";
import Footer from '../../components/footer/Footer'

const url = "https://docs.google.com/forms/d/e/1FAIpQLSe1ZqQFuGtmaz6Elv0NxgABxe_Jn6T1lqK7l5B8kHXSovN3aw/viewform"

function Contribute() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Banner
          path="/images/landing5.png"
          heading={"Dreams Have No Boundaries"}
          page="contribute"
        />


        <section className={styles.mainWrapper}>
          <div className={styles.contentWrapper}>
            <h2>Our Mission</h2>
            <p>
              We mainly focus on Social Awareness and aid the underprivileged.
              Education is the foundation for a better life. It is the most
              effective driver for societal change. A youngster cannot, however,
              receive an education in a vacuum. Therefore we work intensively
              towards providing poor children with education. We also help
              impoverished families with health care. As for saving our mother
              nature, we conduct several Tree Plantation sessions which benefits
              the environment as well as us humans by lowering air pollution and
              other harmful pollutants.
            </p>
          </div>
          <div className={styles.rulesWrapper}>
            <h3>Read the following <span>rules</span> before applying:-</h3>
            <div className={styles.rulesContainer}>
              <ol>
                <li>The work of Muskan team is done with selfless and selfless spirit.</li>
                <li>Don’t join if you want grace, name or accomplishment.</li>
                <li>If caught doing any kind of politics and PROMOTE factionalism, the membership OF THE SAID MEMBER will be canceled with the consent of all the members of the team.</li>
                <li>There is no position in Muskan Team. Do not aspire for any kind of position.</li>
                <li>Muskan team keeps away from political activities.</li>
                <li>The members of the Muskan team have to contribute a minimum amount of support every month.</li>
                <li>The service work of Muskan team will be informed to members through the WhatsApp’s groups. It is mandatory to come to any one service work once in a month.</li>
              </ol>
            </div>
          </div>
        </section>
        <JoinUs/>
      </main>
        <Footer/>
    </React.Fragment>
  );
}

export default Contribute;
