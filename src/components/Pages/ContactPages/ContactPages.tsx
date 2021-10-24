import React from "react";
import Button from "../../atoms/Button/Button";
import ContactText from "../../molecules/ContactText/ContactText";
import "./ContactPages.scss";

const ContactPages: React.FC = () => {
  return (
    <div className="ContactPages">
      <div className="ContactTextLink">
        <a href="">Contact</a>
      </div>
      <div className="ContactTextType">
        <ContactText />
      </div>
      <div className="ButtonType">
        <Button />
      </div>
    </div>
  );
};

export default ContactPages;
