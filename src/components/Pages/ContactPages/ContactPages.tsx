import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import axios from "axios";
import styles from "./ContactPages.module.scss";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
  console.log(data);
};
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  async function submitForm(e: any) {
    e.preventDefault();
    alert("送信完了");
    const webHookURL =
      "https://hooks.slack.com/services/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";
  }
  const data = {
    text: `NAME: ${name}\n EMAIL: ${email}\n MESSAGE: ${message}`,
  };

  let res = axios.post(webHookURL, JSON.stringify(data), {
    withCredentials: false,
    transformRequest: [
      (data, headers) => {
        delete headers.post["Content-Yype"];
        return data;
      },
    ],
  });

  if (res.status === 200) {
    alert("送信完了");

    setName("");
    setEmail("");
    setMessage("");
  } else {
    alert("送信失敗");
  }

  return (
    <form className={styles.contactPages} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <HeaderLink />
      </div>
      <h2>Contact</h2>
      <div className={styles.inputWrapper}>
        <div className={styles.textForm}>
          <input
            className={styles.textBox}
            // placeholder="名前"
            id="name"
            type="text"
            {...register("name", { required: true })}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className={styles.label}>name</label>
        </div>
        {errors.name && (
          <div className={styles.errorsMessage}>※名前を入れてください</div>
        )}

        <div className={styles.emailForm}>
          <input
            className={styles.emailBox}
            // placeholder="メールアドレス"
            id="email"
            type="email"
            {...register("email", { required: true })}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className={styles.label}>email</label>
        </div>
        {errors.email && (
          <div className={styles.errorsMessage}>
            ※メールアドレスを入れてください
          </div>
        )}

        <div className={styles.messageForm}>
          <textarea
            className={styles.messageBox}
            // placeholder="お問い合わせ内容"
            id="message"
            {...register("message", { required: true })}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <label className={styles.label}>message</label>
        </div>
        {errors.message && (
          <div className={styles.errorsMessage}>
            ※お問い合わせ内容を入れてください
          </div>
        )}
      </div>
      <div className={styles.aaa}>
        <button
          className={styles.submitButton}
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          送信
        </button>
      </div>
    </form>
  );
}

// interface IFormInput {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactPages: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [name, setName] = useState<string>("");
//   const [info, setInfo] = useState<string>("");

//   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     //再読み込みさせない
//     e.preventDefault();

//     //email,nameをアラート
//     alert(`名前:  ${name}
// メールアドレス:  ${email}
// お問合わせ内容:  ${info}`);

//     // email, name変数を初期化;
//     setEmail("");
//     setName("");
//     setInfo("");
//   };

//   return (
//     <>
//       <div className={styles.contactPages}>
//         <HeaderLink />
//         <h2>Contact</h2>
//         <form onSubmit={(e) => handleOnSubmit(e)}>
//           <div className={styles.inputWrapper}>
//             <input
//               className={styles.textBox}
//               placeholder="名前"
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className={styles.inputWrapper}>
//             <input
//               className={styles.emailBox}
//               placeholder="メールアドレス"
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className={styles.inputWrapper}>
//             <textarea
//               className={styles.messageBox}
//               placeholder="お問い合わせ内容"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <span className={styles.inputError}></span>
//           </div>

//           <button className={styles.submitButton} type="submit">
//             送信
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ContactPages;
