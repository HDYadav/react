
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
  

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurentMenu(resID);
  // console.log(
  //   resInfo?.cards[0]?.card?.card?.["@type"] ===
  //     "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  // );


  console.log(resInfo);

 


  const [showIndex, setShowIndex] = useState(0);
  //console.log(resInfo?.cards[2].card?.card?.info.name);

  let name = resInfo?.cards[0]?.card?.card?.info.name;
  let cuisines = resInfo?.cards[0]?.card?.card?.info.cuisines;

 


  const categories =
    resInfo?.cards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ); 
 

  // console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className=" text-bold my-6 text-2xl">{name}</h1>
      <p className="text-bold text-lg">{cuisines.join(",")}</p>
      <h2>Menu</h2>
      {categories.map((category, index) => (
        // accourdian
        <RestaurentCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          ShowItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
