import React from "react";
import styles from "scss/layout/Partners.module.scss";

function Partners() {
  return (
    <div className="container-wrapper">
      <h1 className="uppercase text-center text-gradient mb-60px font-heading fs-48px weight-7">
        partnerships and affiliations
      </h1>

      <main className={styles.partners}>
        <p className="font-heading white opacity-0_4 uppercase fs-24px">
          Reflex Finance
        </p>
        <p className="font-heading white opacity-0_4 uppercase fs-24px">
          EVERRISE
        </p>
        <p className="font-heading white opacity-0_4 uppercase fs-24px">
          NEWTON MINT LABS
        </p>
        <p className="font-heading white opacity-0_4 uppercase fs-24px">
          GREEDY GRAMPS
        </p>
      </main>
    </div>
  );
}

export default Partners;
