import React from "react";
import Input from "./components/atoms/Input/Input";

const ContactText = () => {
  return (
    <div>
      <Input />
      <textarea className="TextBox" placeholder="お問い合わせ内容" />
    </div>
  );
};
export default ContactText;
