import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./ContactPages.module.scss";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactPages = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className={styles.formControl}>
            <input
              className={styles.textBox}
              type="text"
              placeholder="名前"
              name="name"
              {...register({ required: true })}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span>名前を入力してください</span>}
          </div>

          <div className={styles.formControl}>
            <input
              className={styles.textBox}
              neme="email"
              type="email"
              placeholder="メールアドレス"
              name="email"
              {...register({ required: true })}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span>メールアドレスを入力してください</span>}
          </div>

          <div className={styles.formControl}>
            <textarea
              neme="message"
              className={styles.textAreaInput}
              placeholder="お問い合わせ内容"
              name="message"
              {...register({ required: true })}
              onChange={(e) => setInfo(e.target.value)}
            />
            {errors.message && <span>お問い合わせ内容を入力してください</span>}
          </div>

          <button className={styles.submitButton} type="submit">
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPages;
