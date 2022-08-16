import TeamCard from "components/TeamCard";
import React from "react";
import styles from "scss/layout/Team.module.scss";
import soldier from "assets/images/rewards/soldier.png";

function Team() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2">
        <header className="mb-70px">
          <h1 className="font-heading text-gradient text-center fs-48px mb-25px uppercase">
            Our Team
          </h1>
          <p className="fs-14px white text-center lh-1_9">
            We have put together a strong bench of Directors and advisors with a
            wealth of experience from all relevant sectors, from Blockchain,
            Tokenomics, Real Estate, Construction and finance.
          </p>
        </header>
        <main className={styles.cards}>
          <TeamCard img={soldier} name="placeholder" designation="Founder" />
          <TeamCard designation="Founder" />
          <TeamCard designation="Founder" />

          <TeamCard designation="Founder" />
          <TeamCard designation="Founder" />
          <TeamCard designation="Founder" />

          <TeamCard designation="Founder" />
          <TeamCard designation="Founder" />
          <TeamCard designation="Founder" />
        </main>
      </div>
    </div>
  );
}

export default Team;
