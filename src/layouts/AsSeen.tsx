import React from "react";
import styles from "scss/layout/AsSeen.module.scss";
import img1 from "assets/images/asseenon/partner-img-1.png";
import img2 from "assets/images/asseenon/partner-img-2.png";
import img3 from "assets/images/asseenon/partner-img-3.png";
import img4 from "assets/images/asseenon/partner-img-4.png";

function AsSeen() {
  return (
    <div className="container-wrapper-2">
      <h1 className="font-heading text-gradient fs-24px mb-20px w-fit-content">
        As seen on
      </h1>

      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AsSeen;
