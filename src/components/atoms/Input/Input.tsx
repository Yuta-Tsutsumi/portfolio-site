import React from "react";
import styles from "./Input.module.scss";

const Input: React.FC = () => {
  return (
    <div className={styles.textBox}>
      <input className={styles.textBoxTop} placeholder="お名前" />
      <input className={styles.textBoxMiddle} placeholder="メールアドレス" />
    </div>
  );
};

export default Input;
