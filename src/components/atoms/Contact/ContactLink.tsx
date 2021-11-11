import React from "react";
import { Link } from "react-router-dom";
import ContactPages from "../../Pages/ContactPages/ContactPages";

import styles from "./ContactLink.module.scss";

const ContactLink: React.FC = () => {
  return (
    <div className={styles.contactLink}>
      <Link to="/Contact">Contact</Link>
    </div>
  );
};

export default ContactLink;
