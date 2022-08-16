import React from "react";
import styles from "scss/layout/LookAtPerson.module.scss";

function LookAtPerson() {
  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <header>
          <h1 className="font-heading text-gradient text-center fs-48px mb-25px uppercase">
            We Look At The Person, Not The History
          </h1>
          <p className="fs-14px white text-center lh-1_9">
            We do away with the traditional mortgage systems and their stringent
            credit check systems. While we still do a credit check, our decision
            is based on the individual and an affordability check. If our
            criteria are met, potential clients are put to a community vote with
            all the information provided, so a decision can be made with full
            transparency.
          </p>
        </header>
      </div>
    </div>
  );
}

export default LookAtPerson;
