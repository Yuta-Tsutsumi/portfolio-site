import React from "react";
import Input from "../../atoms/Input/Input";
import styles from "./ContactText.module.scss";

const ContactText: React.FC = () => {
  return (
    <>
      <div>
        <Input />
      </div>
      <div className={styles.TextArea}>
        <textarea
          className={styles.TextAreaInput}
          placeholder="お問い合わせ内容"
        />
      </div>
    </>
  );
};
export default ContactText;
