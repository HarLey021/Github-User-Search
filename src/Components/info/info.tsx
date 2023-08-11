import { FC } from "react";
import "./info.css";
import QuickInfo from "../quickInfo/quickInfo";
import Bio from "../bio/bio";
import Activity from "../activity/activity";
import Socials from "../socials/socials";
import { userInfoDto } from "../../App";

interface Props {
  theme: string;
  userInfo: userInfoDto | undefined;
}
const Info: FC<Props> = ({ theme, userInfo }) => {
  return (
    <div className={`infoContainer ${theme === "dark" ? "infoDark" : ""}`}>
      <QuickInfo theme={theme} userInfo={userInfo} />
      <Bio theme={theme} userInfo={userInfo} />
      <Activity theme={theme} userInfo={userInfo} />
      <Socials theme={theme} userInfo={userInfo} />
    </div>
  );
};

export default Info;
