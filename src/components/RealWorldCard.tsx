import React from "react";
import styles from "scss/components/RealWorldCard.module.scss";

interface Props {
  img: string;
  title: string;
  desc: string;
}

function RealWorldCard({ img, title, desc }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={img} alt="" className="mb-30px" />
        <h2 className="fs-16px text-gradient weight-7 mb-15px">{title}</h2>
        <p className="fs-14px white lh-1_9 weight-4">{desc}</p>
      </div>
    </div>
  );
}

export default RealWorldCard;
