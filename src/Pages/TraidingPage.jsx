import { useState } from "react";
import Navbar from "../Components/Navbar";
import TradeCardGroup from "../Components/TradeCardGroup";
import TradeFilterGroup from "../Components/TradeFilterGroup";
import LoginModal from "../Components/LoginModal";

function TraidingPage() {
  const [minLevel, setMinLevel] = useState(0);
  const [maxLevel, setMaxLevel] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");
<<<<<<< HEAD
=======
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLoginSuccess = (username) => {
    setLoggedInUser(username);
  };
>>>>>>> refs/remotes/origin/main

  const updateMinLevel = (level) => setMinLevel(level);
  const updateMaxLevel = (level) => setMaxLevel(level);
  const updateSearchTerm = (term) => setSearchTerm(term);

  return (
    <>
      <LoginModal onLoginSuccess={handleLoginSuccess} />
      <Navbar username={loggedInUser} />
      {/* <p>Current Search Term: {minLevel} {maxLevel} {searchTerm}</p> */}
      <div className="FilterGroup">
        <TradeFilterGroup
          setMinLevel={updateMinLevel}
          setMaxLevel={updateMaxLevel}
          setSearchTerm={updateSearchTerm}
        />
      </div>
      <TradeCardGroup
        minLevel={minLevel}
        maxLevel={maxLevel}
        searchTerm={searchTerm}
      />
    </>
  );
}

export default TraidingPage;
