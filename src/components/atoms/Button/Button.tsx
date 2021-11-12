import React from "react";
import styles from "./Button.module.scss";

const Button: React.FC = () => {
  const onClickAdd = () => {
    alert("送信完了");
  };
  return (
    <div className={styles.button}>
      <button onClick={onClickAdd}>送信</button>
    </div>
  );
};

export default Button;
