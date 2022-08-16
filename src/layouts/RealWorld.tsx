import RealWorldCard from "components/RealWorldCard";
import React from "react";
import styles from "scss/layout/RealWorld.module.scss";
import icon1 from "assets/images/icons/multi.png";
import icon2 from "assets/images/icons/profitable.png";
import icon3 from "assets/images/icons/passive.png";

function RealWorld() {
  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <header className="mb-70px">
          <h1 className="font-heading text-gradient text-center fs-48px mb-20px">
            A Coin With Huge Real World Utility
          </h1>
          <p className="fs-14px white text-center lh-1_9">
            OUT is a token that is designed to provide multi-layered rewards to
            its holders and stakers, through a unique and innovative reward
            system, based not only on the tokenomics and staking rewards but
            also on the returns from the real-life property based application of
            the token.
          </p>
        </header>

        <main>
          <RealWorldCard
            img={icon1}
            title="Multi Utility Project"
            desc="Owners Unity Is a Multi facetted project with several revenue-generating utilities to ensure longevity in this volatile time."
          />
          <RealWorldCard
            img={icon2}
            title="Profitable Real World Business"
            desc="Owners Unity has robust real-world utility and viability for a real-world business, which means revenue generated can benefit OUT token holders."
          />
          <RealWorldCard
            img={icon3}
            title="7 Passive Revenue Streams For Holders"
            desc="OUT holders will be able to benefit from up to 7 Passive income revenue streams. Including Sales Tax, Buy Tax, Staking."
          />
        </main>
      </div>
    </div>
  );
}

export default RealWorld;
