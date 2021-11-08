import React from "react";
import Button from "../../atoms/Button/Button";
import ContactText from "../../molecules/ContactText/ContactText";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./ContactPages.module.scss";

const ContactPages: React.FC = () => {
  return (
    <div className={styles.ContactPages}>
      <HeaderLink />
      <div className={styles.ContactTextLink}>Contact</div>
      <div className={styles.ContactTextType}>
        <ContactText />
      </div>
      <div className={styles.ButtonType}>
        <Button />
      </div>
    </div>
  );
};

export default ContactPages;
