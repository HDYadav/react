import { CDN_URL } from "../utils/constans";

const ItemList = (items) => {
  const allItems = items.items;

  //console.log(allItems);

  return (
    <div>
      {allItems.map((allItem) => (
        <div
          key={allItem.card.info.id}
          className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{allItem.card.info.name} </span>
              <span>
                ₹
                {allItem.card.info.price
                  ? allItem.card.info.price / 100
                  : allItem.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{allItem.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={CDN_URL + allItem.card.info.imageId}
              className="w-full"
            ></img>
            <div className="absolute">
              <button className="p-2 mx-5 rounded-lg bg-grey shadow-lg ">Add + </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
