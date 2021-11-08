import React from "react";
import { Link } from "react-router-dom";
import classes from "./LinkText.module.scss";

type Props = {
  text: string;
  url: string;
};

const LinkText: React.VFC<Props> = ({ text, url }) => {
  return (
    <Link to={url} className={classes.link}>
      {text}
    </Link>
  );
};

export default LinkText;
