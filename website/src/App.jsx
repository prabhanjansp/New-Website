import React from "react";
import styles from "./style";
import {
  Navabr,
  Hero,
  Billing,
  Business,
  CTA,
  CardDeal,
  Client,
  Stats,
  Footer,
  Testimonials,
  FeedbackCard
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navabr />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <FeedbackCard />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
