import RewardCard from "components/RewardCard";
import React from "react";
import styles from "scss/layout/Rewards.module.scss";
import icon1 from "assets/images/rewards/money-recive.png";
import icon2 from "assets/images/rewards/coin.png";
import icon3 from "assets/images/rewards/moneys.png";
import icon4 from "assets/images/rewards/wallet.png";

function Rewards() {
  return (
    <div className={styles.containerWrapper}>
      <div className={`${styles.container} container-wrapper`}>
        <header className="mb-50px">
          <h1 className="font-heading text-gradient text-center fs-48px mb-20px">
            REWARDS FOR HOLDERS
          </h1>
        </header>

        <main>
          <RewardCard
            icon={icon1}
            title="12.5%"
            subtitle="bUSD TO STAKED HOLDERS"
          />
          <RewardCard icon={icon2} title="7%" subtitle="SALES TAX TO HOLDERS" />
          <RewardCard icon={icon3} title="4%" subtitle="BUY TAX TO HOLDERS" />
          <RewardCard icon={icon4} title="5%" subtitle="bUSD TO HOLDERS" />
        </main>
      </div>
    </div>
  );
}

export default Rewards;
