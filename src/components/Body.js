
import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

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
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

     const jsonData = await data.json();

    console.log(jsonData);
    
    setListOfRestoRents(jsonData.data.cards["2"].data.data.cards);
  };

 
  

  return (
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
          <Restaurant key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;