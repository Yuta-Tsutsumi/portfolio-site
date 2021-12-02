import React from "react";
import ProfileImage from "../../molecules/ProfileImage/ProfileImage";
import profileTopImage from "../../../imageFolder/profileTopImage.jpg";
import styles from "./ProfilePages.module.scss";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProfilePages: React.FC = () => {
  return (
    <>
      <div className={styles.topImage}>
        <img className={styles.image} src={profileTopImage} alt="トップ画像" />
        <header className={styles.header}>
          <HeaderLink />
        </header>
        <div className={styles.middleImage}>
          <ProfileImage />
        </div>
      </div>
      <div className={styles.letterBottom}>
        <p>堤 佑太</p>
        <p>Yuta Tsutsumi</p>
        <p>1993年12月21日</p>
        <a className={styles.linkTwitter} href="https://twitter.com/warakera29">
          <span>
            <FontAwesomeIcon icon={faTwitter} />
            &nbsp;Twitter&nbsp;
          </span>
        </a>
        /
        <a
          className={styles.linkGithub}
          href="https://github.com/Yuta-Tsutsumi/portfolio-site"
        >
          <span>
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;Github&nbsp;
          </span>
        </a>
        /
        <a className={styles.linkQiita} href="#">
          Qiita
        </a>
      </div>
      <div className={styles.letterProfile}>
        <h2>Profile</h2>
      </div>
    </>
  );
};

export default ProfilePages;
