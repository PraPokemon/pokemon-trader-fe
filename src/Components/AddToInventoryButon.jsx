function addToInventoryButon() {
    const addToInventory = (event) => {
        event.stopPropagation();
        showToast(true);
      };
    return (
      <>
       <button className="ButonBasic" onClick={(event)=>addToInventory(event)}>Add to Inventory</button>
      </>
    );
  }
  
  export default addToInventoryButon;