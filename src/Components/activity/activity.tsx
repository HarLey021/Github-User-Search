import "./activity.css";
import { FC, useState, useEffect } from "react";
import { userInfoDto } from "../../App";

interface Props {
  theme: string;
  userInfo: userInfoDto | undefined;
}

const Activity: FC<Props> = ({ theme, userInfo }) => {
  return (
    <div className={`activityContainer ${theme === "dark" ? "dark" : ""}`}>
      <div className="reposContainer">
        <p className={`repos ${theme === "dark" ? "dark" : ""}`}>Repos</p>
        <p className={`reposNum ${theme === "dark" ? "dark" : ""}`}>
          {userInfo?.public_repos ? userInfo.public_repos : "8"}
        </p>
      </div>
      <div className="followersContainer">
        <p className={`followers ${theme === "dark" ? "dark" : ""}`}>
          Followers
        </p>
        <p className={`followersNum ${theme === "dark" ? "dark" : ""}`}>
          {userInfo?.followers || userInfo?.followers !== undefined
            ? userInfo.followers
            : "3938"}
        </p>
      </div>
      <div className="followingContainer">
        <p className={`following ${theme === "dark" ? "dark" : ""}`}>
          Following
        </p>
        <p className={`followingNum ${theme === "dark" ? "dark" : ""}`}>
          {userInfo?.following || userInfo?.following !== undefined
            ? userInfo.following
            : "9"}
        </p>
      </div>
    </div>
  );
};

export default Activity;
