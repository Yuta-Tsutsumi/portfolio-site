import React from "react";
import "./Input.scss";

const Input: React.FC = () => {
  return (
    <div className="TextBox">
      <input className="TextBoxTop" placeholder="お名前" />
      <input className="TextBoxTop" placeholder="メールアドレス" />
    </div>
  );
};

export default Input;
