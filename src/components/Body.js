
import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

  const [ListOfRestoRents, setListOfRestoRents] = useState([
    {
      info: {
        id: "353956",
        name: "Bakingo",
        cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
        locality: "A Block",
        areaName: "Sector 83",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts", "Beverages"],
        avgRating: 4.3,
        parentId: "3818",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
      },
    },
    {
      info: {
        id: "353957",
        name: "McD",
        cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
        locality: "A Block",
        areaName: "Sector 83",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.3,
        parentId: "3818",
        avgRatingString: "3.3",
        totalRatingsString: "5K+",
      },
    },
    {
      info: {
        id: "353958",
        name: "Domino",
        cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
        locality: "A Block",
        areaName: "Sector 83",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.3,
        parentId: "3818",
        avgRatingString: "5.3",
        totalRatingsString: "5K+",
      },
    },
  ]);
  
  useEffect(() => {
    //console.log("useEfffect Render")
    fectchData();
  }, []);


  const fectchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // https://corsproxy.io/
    const jsonData = await data.json();

    setListOfRestoRents(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // conditinal rendering 
 
  // if (ListOfRestoRents.length === 0) {
  //   <Shimmer />
  // }
    return ListOfRestoRents === 0 ? <Shimmer /> :(
      <div className="body">
        <div className="search">
          <button
            onClick={() => {
              const TestLists = ListOfRestoRents.filter(
                (res) => res.info.avgRatingString > 4
              );

              setListOfRestoRents(TestLists);

              //console.log(RestoLists);
            }}
          >
            Top Rated Restorents
          </button>
        </div>
        <div className="res-container">
          {ListOfRestoRents.map((restaurants) => (
            <Link key={restaurants.info.id} to={"restaurants/"+restaurants.info.id}> <Restaurant  resData={restaurants} /></Link>
          ))}
        </div>
      </div>
    );
};

export default Body;