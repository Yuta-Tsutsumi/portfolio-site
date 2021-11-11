import React from "react";
import Button from "../../atoms/Button/Button";
import ContactText from "../../molecules/ContactText/ContactText";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import styles from "./ContactPages.module.scss";

const ContactPages: React.FC = () => {
  return (
    <div className={styles.contactPages}>
      <HeaderLink />
      <div className={styles.contactTextLink}>Contact</div>
      <div>
        <ContactText />
      </div>
      <div className={styles.buttonType}>
        <Button />
      </div>
    </div>
  );
};

export default ContactPages;
