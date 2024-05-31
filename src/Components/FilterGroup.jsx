import TypeFilterButon from "./TypeFilterButon";
import PokemonFilterSerch from "./PokemonFilterSerch";
import FilterLvLMax from "./FilterLvLMax";
function FilterGroup() {
  return (
    <>
      <div className="FilterGroupTop">
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
      </div>
      <div className="FilterGroupBottom">
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
        <TypeFilterButon />
      </div>
      <div className="FilterGroupOther">
       <PokemonFilterSerch/>
       <FilterLvLMax/>
      </div>
    </>
  );
}

export default FilterGroup;
