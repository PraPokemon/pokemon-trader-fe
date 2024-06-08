import Navbar from "../Components/Navbar";
import FilterGroup from "../Components/FilterGroup";
import TradeCardGroup from "../Components/TradeCardGroup";

function TradingPage() {
    return (
      <>
      <Navbar/>
      <div className="FilterGroup">
        <FilterGroup />
      </div>
       <TradeCardGroup/>

      </>
    );
  }
  
  export default TradingPage;