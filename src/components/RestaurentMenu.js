import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constans";
  

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resID }  = useParams();
  //console.log(resID);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resID);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  let name = resInfo?.cards[0]?.card?.card?.info.name;
  let city = resInfo?.cards[0]?.card?.card?.info.city;
  
  //console.log(resInfo?.cards[0]?.card?.card?.info);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Biryani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
