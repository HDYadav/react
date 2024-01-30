
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
    <div className="m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-200"  >
      <img className="flex rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className=" font-bold py-3 text-xl">{name} </h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} Minutes </h4>
    </div>
  );
};


export const withPromotedLabel = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <Restaurant {...props} />
      </div>
    );
  };
};


export default Restaurant;