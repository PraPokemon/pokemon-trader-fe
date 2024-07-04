import React from "react";
import LoginModal from "../Components/LoginModal";
import Navbar from "../Components/Navbar";
import InventoryCard from "../Components/InventoryCard";
import TradeFilterGroup from "../Components/TradeFilterGroup";

function Inventory() {
  const [minLevel, setMinLevel] = useState(0);
  const [maxLevel, setMaxLevel] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");
  const updateMinLevel = (level) => setMinLevel(level);
  const updateMaxLevel = (level) => setMaxLevel(level);
  const updateSearchTerm = (term) => setSearchTerm(term);
    return (
      <>
      <Navbar/>
      <LoginModal/>
      <div className="FilterGroup">
      <TradeFilterGroup
          setMinLevel={updateMinLevel} 
          setMaxLevel={updateMaxLevel} 
          setSearchTerm={updateSearchTerm} 
        />
      </div>

      <div className="InventoryCard">
        <InventoryCard/>
      </div>
      
      

      </>
    );
  }
  
  export default Inventory;