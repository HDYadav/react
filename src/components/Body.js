
import Restaurant, { withPromotedLabel } from "./Restaurant"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../utils/useBody"; 


const Body = () => {

  const ListOfRestoRents = useBody();
  const RestaurantCardPromoted = withPromotedLabel(Restaurant);
  
 //console.log(ListOfRestoRents);
  
  return ListOfRestoRents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-4 p-2">
        <button
          className="px-4 py-2 bg-green-100 flex items-center rounded-lg"
          onClick={() => {
            const TestLists = ListOfRestoRents.filter(
              (res) => res.info.avgRatingString > 4
            );

            setListOfRestoRents(TestLists);
          }}
        >
          Top Rated Restorents
        </button>
      </div>
      <div className="flex flex-wrap">
        {ListOfRestoRents.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"restaurants/" + restaurants.info.id}
          >
            {restaurants.info.promoted ? (
              <RestaurantCardPromoted resData={restaurants} />
            ) : (
              <Restaurant resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;