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
              name="name"
              type="text"
              placeholder="名前"
              ref={register}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span>名前を入力してください</span>}
          </div>

          <div className={classes.inputWrapper}>
            <input
              className={styles.textBox}
              type="email"
              placeholder="メールアドレス"
              {...register("newmessage", {
                required: {
                  value: true,
                  message: "メールアドレスを入力してください",
                },
              })}
              type="newmessage"
              disabled={disabled}
              className={classes.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={classes.inputError}>
              {errors.newmessage.message}
            </span>
            {/* {errors.email && <span>メールアドレスを入力してください</span>} */}
          </div>

          <div className={classes.inputWrapper}>
            <textarea
              neme="message"
              className={styles.textAreaInput}
              placeholder="お問い合わせ内容"
              ref={register}
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

<div className={classes.inputWrapper}>
  <input
    placeholder="新パスワード"
    {...register("newPassword", {
      required: {
        value: true,
        message: "新パスワードを入力してください",
      },
    })}
    type="password"
    disabled={disabled}
    className={classes.input}
  />
  {errors.newPassword && (
    <span className={classes.inputError}>{errors.newPassword.message}</span>
  )}
</div>;
