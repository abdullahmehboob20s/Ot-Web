import useMediaQuery from "hooks/useMediaQuery";
import styles from "scss/components/RewardCard.module.scss";

interface Props {
  icon: string;
  title: string;
  subtitle: string;
}

function RewardCard({ icon, title, subtitle }: Props) {
  const isBellow450px = useMediaQuery("(max-width : 28.125em)");

  return (
    <div className={styles.card}>
      <div className={`${styles.imgBox} mb-25px`}>
        <img src={icon} alt="" />
      </div>

      <p className="fs-24px weight-7 white mb-10px">{title}</p>
      <p className={`${isBellow450px ? "fs-10px" : "fs-16px"} white weight-6`}>
        {subtitle}
      </p>
    </div>
  );
}

export default RewardCard;
