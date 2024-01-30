
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurentMenu from "../utils/useRestaurentMenu";
  

const RestaurantMenu = () => {
 
  const { resID } = useParams();
  
   
 
  const resInfo = useRestaurentMenu(resID);
  console.log(resInfo);

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
