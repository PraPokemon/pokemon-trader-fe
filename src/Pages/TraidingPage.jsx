import Navbar from "../Components/Navbar";
import FilterGroup from "../Components/FilterGroup";

function TradingPage() {
    return (
      <>
      <Navbar/>
      <div className="FilterGroup">
        <FilterGroup />
      </div>
      </>
    );
  }
  
  export default TradingPage;