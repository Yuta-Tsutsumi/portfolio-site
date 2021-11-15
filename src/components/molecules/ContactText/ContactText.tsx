import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import styles from "./ContactText.module.scss";

const ContactText: React.FC = () => {
  return (
    <>
      <div>
        <Input />
      </div>
      <div className={styles.textArea}>
        <textarea
          // value={text}
          className={styles.textAreaInput}
          placeholder="お問い合わせ内容"
        />
      </div>
    </>
  );
};
export default ContactText;
