import { useState } from "react";
import Navbar from "../Components/Navbar";
import TradeCardGroup from "../Components/TradeCardGroup";
import TradeFilterGroup from "../Components/TradeFilterGroup";

function TraidingPage() {
  const [minLevel, setMinLevel] = useState(0);
  const [maxLevel, setMaxLevel] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");

  const updateMinLevel = (level) => setMinLevel(level);
  const updateMaxLevel = (level) => setMaxLevel(level);
  const updateSearchTerm = (term) => setSearchTerm(term);

  return (
    <>
      <Navbar />
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
