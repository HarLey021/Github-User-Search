import "./bio.css";
import { FC } from "react";
import { userInfoDto } from "../../App";

interface Props {
  theme: string;
  userInfo: userInfoDto | undefined;
}

const Bio: FC<Props> = ({ theme, userInfo }) => {
  return (
    <p className={`aboutDev ${theme === "dark" ? "bioDark" : ""}`}>
      {userInfo?.bio !== null && userInfo?.bio
        ? userInfo?.bio
        : "This profile has no bio"}
    </p>
  );
};

export default Bio;
