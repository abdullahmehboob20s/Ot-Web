import React from "react";
import styles from "scss/components/LabelAndInput.module.scss";

interface Props {
  label: string;
  id: string;
  placeholder: string;
  type: "text" | "number";
}

const LabelAndInput = ({ label, id, placeholder, type = "text" }: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="w-fit-content weight-4 fs-12px white mb-5px block pointer"
      >
        {label}
      </label>
      <input
        type={type}
        className={`${styles.input} w-fit-content weight-6 fs-12px black`}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};
export default LabelAndInput;
