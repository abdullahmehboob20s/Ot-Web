import { MouseEventHandler } from "react";
import styles from "scss/components/Button.module.scss";

interface ButtonProps {
  title: string;
  variant?: "pink" | "transparent";
  onClick?: MouseEventHandler | undefined;
}

function Button(props: ButtonProps) {
  const { variant = "transparent", onClick, title } = props;

  return (
    <button
      className={`fs-14px white weight-7 ${styles.button} ${
        variant === "transparent" ? null : styles.pink
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
