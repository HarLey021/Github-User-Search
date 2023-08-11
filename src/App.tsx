import React, { FC, useState } from "react";
import "./App.css";
import Header from "./Components/header/header";
import SearchBar from "./Components/searchBar/searchBar";
import Info from "./Components/info/info";

//This is the interface for fetched data, that is saved to "userInfo" state.
export interface userInfoDto {
  avatar_url: string;
  name: string;
  login: string;
  created_at: string;
  bio: string;
  public_repos: string;
  followers: string;
  following: string;
  location: string;
  html_url: string;
  twitter_username: string;
  company: string;
}

const App: FC = () => {
  const [theme, setTheme] = useState<string>("light"); //State for changing page theme.
  const [userInfo, setUserInfo] = useState<userInfoDto>(); //State for saving fetched data.
  return (
    <div className={`body ${theme === "dark" ? "dark" : ""}`}>
      <div className="mainContainer">
        <Header theme={theme} setTheme={setTheme} />
        <SearchBar
          theme={theme}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <Info theme={theme} userInfo={userInfo} />
      </div>
    </div>
  );
};

export default App;
