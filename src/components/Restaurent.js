import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";


const RestaurentCard = (props) => {
  let { resData } = props;
  console.log(resData);
  const {logedIn}= useContext(UserContext)
  console.log(logedIn);

  let { cloudinaryImageId ,cuisines, name, avgRating, deliveryTime } =
    resData;
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt="restaurent" />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard)=>{
  return (props)=>{
    return(
      <>
      <label>Now Open</label>
      <RestaurentCard {...props}/>
      </>
    )
  }
}
export default RestaurentCard;
