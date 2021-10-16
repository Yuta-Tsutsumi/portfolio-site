import React from "react";
import "./TextBox.scss";

const TextBox: React.FC = () => {
  return (
    <div className="TextBox">
      <input className="TextBoxTop" placeholder="お名前" />
    </div>
  );
};

export default TextBox;
