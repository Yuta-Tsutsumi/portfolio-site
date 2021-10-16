import React from "react";
import "./TextBox.scss";

const TextBox: React.FC = () => {
  return (
    <div>
      <textarea className="TexBox" placeholder="お問い合わせ内容" />
    </div>
  );
};

export default TextBox;
