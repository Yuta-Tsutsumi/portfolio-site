import React from "react";
import "./Input.scss";

const Input: React.FC = () => {
  return (
    <div className="TextBox">
      <input className="Text" placeholder="お名前" />
      <input className="Text" placeholder="メールアドレス" />
    </div>
  );
};

export default Input;
