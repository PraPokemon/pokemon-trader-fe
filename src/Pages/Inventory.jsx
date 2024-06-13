import React from "react";
import LoginModal from "../Components/LoginModal";
import Navbar from "../Components/Navbar";
import TradeCardGroup from "../Components/TradeCardGroup";
import FilterGroup from "../Components/FilterGroup";
import InventoryCard from "../Components/InventoryCard";


/*TODO: -InventoryCard automatski popunit sa pokemonima iz databaze sa koreknim brojen, slikon, statovima...
        -Trade funkcionalnost botuna u InventoryModalu
        -InventoryModal sa apia dovest i prominit u kodu: ime, national dex, lvl, item...
        */
function Inventory() {
    return (
      <>
      <Navbar/>
      <LoginModal/>

      <div className="FilterGroup">
        <FilterGroup />
      </div>

      <div className="InventoryCard">
        <InventoryCard/>
      </div>
      
      

      </>
    );
  }
  
  export default Inventory;