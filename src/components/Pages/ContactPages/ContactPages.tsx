import React, { useState } from "react";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./ContactPages.module.scss";

const ContactPages = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //再読み込みさせない
    e.preventDefault();

    //email,nameをアラート
    alert(`名前:  ${name}
メールアドレス:  ${email}
お問合わせ内容:  ${info}`);

    //email,name変数を初期化
    setEmail("");
    setName("");
    setInfo("");
  };
  return (
    <>
      <div className={styles.contactPages}>
        <HeaderLink />
        <h2>Contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.textBox}
            type="text"
            placeholder="名前"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className={styles.textBox}
            type="email"
            placeholder="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            className={styles.textAreaInput}
            placeholder="お問い合わせ内容"
            onChange={(e) => setInfo(e.target.value)}
          />
          <br />
          <button className={styles.submitButton} type="submit">
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPages;
