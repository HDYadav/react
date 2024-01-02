
import Restaurant from "./Restaurant";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Serarch</div>
      <div className="res-container">
        {resList.map((restaurants) => (
          <Restaurant key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;