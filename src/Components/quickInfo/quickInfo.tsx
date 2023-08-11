import { FC } from "react";
import "./quickInfo.css";
import devPhoto from "./dev-photo.png";
import { userInfoDto } from "../../App";

interface Props {
  theme: string;
  userInfo: userInfoDto | undefined;
}
const QuickInfo: FC<Props> = ({ theme, userInfo }) => {
  //Formatting account creating date.
  const formattedDate = userInfo?.created_at
    ? new Date(userInfo.created_at)
        .toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .split(",")
        .join(" ")
    : "Jan 25 2011";
  return (
    <div className="quickInfoContainer">
      <img
        className="userPhoto"
        src={userInfo?.avatar_url ? userInfo.avatar_url : devPhoto}
      />
      <div className="textInfoContainer">
        <div className="NamesSeparator">
          <h3
            className={`userName ${theme === "dark" ? "quickInfoDark" : ""} ${
              userInfo?.name !== null ? "" : "notAvailable"
            }`}
          >
            {userInfo?.name
              ? userInfo.name
              : userInfo?.name === null
              ? "Not Available"
              : "The Octocat"}
          </h3>
          <p className="nickName">
            @{userInfo?.login ? userInfo.login : "octocat"}
          </p>
        </div>
        <p className={`joiningDate ${theme === "dark" ? "quickInfoDark" : ""}`}>
          Joined {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default QuickInfo;
