import React from "react";
import "./ProfileImage.scss";
import { ProfileImage } from "./profile.jpg";

const ProfileImage = () => {
  return (
    <div>
      <img src={ProfileImage} alt="./profile.jpg" />
    </div>
  );
};

export default ProfileImage;
