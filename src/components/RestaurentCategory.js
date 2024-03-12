import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, ShowItems, setShowIndex }) => {
  //const [ShowItems, setShowItems] = useState(false); // default showItem hide if make true all items category will be show

  const handeled = () => {
    // setShowItem(!ShowItem); // its toggel system if showItem and hide the item

    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span className=" font-bold text-lg cursor-pointer" onClick={handeled}>
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span> ⬇️</span>
      </div>

      {ShowItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurentCategory;