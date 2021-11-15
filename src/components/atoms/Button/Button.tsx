import React, { useState } from "react";
import styles from "./Button.module.scss";

const Button: React.FC = () => {
  const [sendButton, setSendButton] = useState("");
  const onClickAdd = () => {
    // if (sendButton === "") return;
    alert("送信完了");
  };
  return (
    <div className={styles.button}>
      <span onClick={onClickAdd}>送信</span>
    </div>
  );
};

export default Button;
