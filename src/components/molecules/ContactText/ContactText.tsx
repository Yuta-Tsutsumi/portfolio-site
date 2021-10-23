import React from "react";
import Input from "../../atoms/Input/Input";
import "./ContactText.scss";

const ContactText = () => {
  return (
    <>
      <div>
        <Input />
      </div>
      <div className="TextArea">
        <textarea className="TextAreaInput" placeholder="お問い合わせ内容" />
      </div>
    </>
  );
};
export default ContactText;
