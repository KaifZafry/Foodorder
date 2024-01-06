import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurentsMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const resInfo = useRestaurantsMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwo, avgRating, areaName } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="container-menu">
        <div className="resName">
          <h1>{name}</h1>
          <h3>{avgRating}stars</h3>
        </div>
        <div className="areaName">
          <h5>{areaName}</h5>

          <h5>
            Rs {costForTwo / 100} <span>costForTwo</span>
          </h5>
        </div>
        <h2>Menu</h2>
        {categories.map((item, index) => (
          <RestaurantCategory
          key={item.card.card.title}
          data={item.card.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(prevIndex => (prevIndex === index ? -1 : index))}
        />
        
        ))}
      </div>
    </>
  );
};

export default RestaurentsMenu;
