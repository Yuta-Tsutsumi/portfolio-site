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

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log(data);
    alert(data.email);
  };

  const webHookURL =
    "https://hooks.slack.com/services/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";

  // let res = axios.post(webHookURL, JSON.stringify, {
  //   withCredentials: false,
  //   transformRequest: [
  //     (data, headers) => {
  //       delete headers.post["Content-Yype"];
  //       return data;
  //     },
  //   ],
  // });

  // if (res.input === 200) {
  //   alert("送信完了");
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // } else {
  //   alert("送信失敗");
  // }

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
          {/* <label htmlFor="name" className={styles.label}>
            Name
          </label> */}
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
          {/* <label htmlFor="email" className={styles.label}>
            E-mail
          </label> */}
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
          {/* <label htmlFor="message" className={styles.label}> */}
          {/* Message
          </label> */}
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
