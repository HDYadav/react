
import { CDN_URL } from "../utils/constans";

const Restaurant = (props) => {
  // const { resName, cusineName } = props;

  const { resData } = props;
  //console.log(resData.name);

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name} </h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} Minutes </h4>
    </div>
  );
};
export default Restaurant;