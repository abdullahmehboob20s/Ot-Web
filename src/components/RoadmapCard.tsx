import styles from "scss/components/RoadmapCard.module.scss";

interface PointProps {
  point: string;
}

interface Props {
  title: string;
  points: Array<string>;
  stripe?: string;
  stripeClassName?: string;
  className?: string;
}

const Point = ({ point }: PointProps) => {
  return (
    <p className={`${styles.point} fs-12px white weight-4`}>
      <span className={`${styles.circle}`}></span> {point}
    </p>
  );
};

function RoadmapCard({
  title,
  points,
  stripe,
  className,
  stripeClassName,
}: Props) {
  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      {stripe ? <img src={stripe} className={stripeClassName} alt="" /> : null}

      <div className={styles.card}>
        <h1 className="font-heading white mb-30px fs-16px">{title}</h1>

        <div className={styles.points}>
          {points.map((point, index) => (
            <Point key={index} point={point} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapCard;
