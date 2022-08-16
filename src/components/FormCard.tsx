import styles from "scss/components/FormCard.module.scss";

interface Props {
  title: string;
  subtitle: string;
}

function FormCard({ title, subtitle }: Props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <p className="font-heading white fs-14px text-center mb-10px">
          {title}
        </p>
        <p className="font-heading text-center fs-14px white">{subtitle}</p>
      </div>
    </div>
  );
}

export default FormCard;
