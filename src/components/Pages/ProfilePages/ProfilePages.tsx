import React from "react";
import ProfileImage from "../../molecules/ProfileImage/ProfileImage";
import profileTopImage from "../../../profileTopImage.jpg";
import styles from "./ProfilePages.module.scss";
import HeaderLink from "../../molecules/HeaderLink/HeaderLink";

const ProfilePages: React.FC = () => {
  return (
    <>
      <div className={styles.topImage}>
        <img className={styles.image} src={profileTopImage} alt="トップ画像" />
        <div className={styles.header}>
          <HeaderLink />
        </div>
      </div>

      <div className={styles.middleImage}>
        <ProfileImage />
      </div>

      <div className={styles.letterBottom}>
        <p>堤 佑太</p>
        <p>Yuta Tsutsumi</p>
        <p>1993年12月21日</p>
        <div className={styles.link}>
          <div>
            <a
              className={styles.linkTwitter}
              href="https://twitter.com/warakera29"
            >
              Twitter
            </a>
            /
          </div>
          <div>
            <a
              className={styles.linkGithub}
              href="https://github.com/Yuta-Tsutsumi/portfolio-site"
            >
              GitHub
            </a>
            /
          </div>
          <div>
            <a className={styles.linkQiita} href="#">
              Qiita
            </a>
          </div>
        </div>
      </div>
      <div className={styles.letterProfile}>
        <h2>Profile</h2>
      </div>
    </>
  );
};

export default ProfilePages;
