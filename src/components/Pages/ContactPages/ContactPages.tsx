import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./ContactPages.module.scss";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactPages: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const { register, handleSubmit, errors, formState } = useForm<IFormInput>({
    mode: "onChange",
  });
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
          <div className={classes.inputWrapper}>
            <input
              className={styles.textBox}
              placeholder="名前"
              {...register("newName", {
                required: {
                  value: true,
                  message: "名前を入力してください",
                },
              })}
              type="newName"
              disabled={disabled}
              className={classes.input}
              onChange={(e) => setName(e.target.value)}
            />
            <span className={classes.inputError}>{errors.newName.message}</span>
          </div>

          <div className={classes.inputWrapper}>
            <input
              className={styles.textBox}
              placeholder="メールアドレス"
              {...register("newEmail", {
                required: {
                  value: true,
                  message: "メールアドレスを入力してください",
                },
              })}
              type="newEmail"
              disabled={disabled}
              className={classes.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={classes.inputError}>
              {errors.newEmail.message}
            </span>
          </div>

          <div className={classes.inputWrapper}>
            <textarea
              className={styles.textAreaInput}
              placeholder="お問い合わせ内容"
              {...register("newMessage", {
                required: {
                  value: true,
                  message: "お問い合わせ内容を入力してください",
                },
              })}
              disabled={disabled}
              className={classes.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={classes.inputError}>
              {errors.newMessage.message}
            </span>
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
