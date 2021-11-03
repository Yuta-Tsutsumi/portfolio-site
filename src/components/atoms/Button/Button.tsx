import React from "react";
import styles from "./Button.module.scss";

const Button: React.FC = () => {
  return (
    <div className={styles.button}>
      <span>送信</span>
    </div>
  );
};

export default Button;
