import React from "react";
import styles from "./Input.module.scss";

const Input: React.FC = () => {
  return (
    <div className={styles.TextBox}>
      <input className={styles.TextBoxTop} placeholder="お名前" />
      <input className={styles.TextBoxMiddle} placeholder="メールアドレス" />
    </div>
  );
};

export default Input;
