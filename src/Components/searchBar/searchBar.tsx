import "./searchBar.css";
import { FC, useState } from "react";
import searchLogo from "./icon-search.svg";
import axios from "axios";
import { userInfoDto } from "../../App";

interface Props {
  theme: string;
  userInfo: userInfoDto | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoDto | undefined>>;
}
const SearchBar: FC<Props> = ({ theme, userInfo, setUserInfo }) => {
  const [userName, setUserName] = useState(""); //State for input.
  const [showNoResults, setShowNoResults] = useState(false); //State for the case when the user is not found.

  //fetching data from Github API
  const loadData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      if (!response.data && response.data.login !== userName) {
        setShowNoResults(true);
      } else {
        setShowNoResults(false);
      }
      setUserInfo(response.data);
      return response.data;
    } catch (error) {
      setShowNoResults(true);
      console.error("Error fetching user data:", error);
      return null;
    }
  };
  return (
    <div className="searchContainer">
      <input
        onChange={(event) => setUserName(event.target.value)}
        className={`searchBar ${theme === "dark" ? "searchBarDark" : ""}`}
        placeholder="Search GitHub username…"
      />
      <img className="searchLogo" src={searchLogo} />
      {showNoResults && <p className="noResultsP">No Results</p>}
      <button
        onClick={() => {
          if (userName !== "") {
            loadData();
          }
        }}
        className="searchBtn"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
