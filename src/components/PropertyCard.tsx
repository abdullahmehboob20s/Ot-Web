import styles from "scss/components/PropertyCard.module.scss";

interface Props {
  title: string;
  description: string;
}

function PropertyCard({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <p className="fs-16px text-gradient mb-10px weight-7">{title}</p>
      <p className="fs-14px white lh-1_9 weight-4">{description}</p>
    </div>
  );
}

export default PropertyCard;
