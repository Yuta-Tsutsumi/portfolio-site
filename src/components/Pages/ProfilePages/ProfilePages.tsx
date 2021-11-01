import React from "react";
import ProfileImage from "../../molecules/ProfileImage/ProfileImage";

import profileTopImage from "../../../profileTopImage.jpg";

import "./ProfilePages.scss";

const ProfilePages = () => {
  return (
    <>
      <div className="topImage">
        <img src={profileTopImage} alt="トップ画像" />
      </div>

      <div className="middleImage">
        <ProfileImage />
      </div>

      <div className="letterBottom">
        <p>堤 佑太</p>
        <p>Yuta Tsutsumi</p>
        <p>1993年12月21日</p>
        <p>Twitter/GitHub/Qiita</p>
      </div>
      <div className="letterProfile">
        <a href="">Profile</a>
      </div>
    </>
  );
};

export default ProfilePages;
