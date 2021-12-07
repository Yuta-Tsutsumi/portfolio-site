import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./ContactPages.module.scss";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.contactPages} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <HeaderLink />
      </header>
      <h2>Contact</h2>
      <div className={styles.inputWrapper}>
        <div className={styles.textForm}>
          <input
            className={styles.textBox}
            placeholder="名前"
            id="name"
            type="text"
            {...register("name", { required: true })}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {errors.name && (
          <div className={styles.errorsMessage}>名前を入れてください</div>
        )}
        <div className={styles.emailForm}>
          <input
            className={styles.emailBox}
            placeholder="メールアドレス"
            id="email"
            type="email"
            {...register("email", { required: true })}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        {errors.email && (
          <div className={styles.errorsMessage}>
            メールアドレスを入れてください
          </div>
        )}
        <div className={styles.messageForm}>
          <textarea
            className={styles.messageBox}
            placeholder="お問い合わせ内容"
            id="message"
            {...register("message", { required: true })}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        {errors.message && (
          <div className={styles.errorsMessage}>
            お問い合わせ内容を入れてください
          </div>
        )}
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.submitButton} type="submit">
          送信
        </button>
      </div>
    </form>
  );
}
