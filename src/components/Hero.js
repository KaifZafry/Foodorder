import RestaurentCard, {withPromotedLabel} from "./Restaurent";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";




const Hero = () => {
  const [listOfRestaurants, setListofrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const{ setUserName}= useContext(UserContext)

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5691957&lng=77.2886424&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setListofrestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data.cards[5].card.card.gridElements)
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };
  // console.log(filteredRestaurants)

  const NewPromotedCard = withPromotedLabel(RestaurentCard);

  const OnlineStatus= useOnlineStatus();
  if(OnlineStatus===false){
    return(
      <h1>Look like you are not connected to internet!! 
    Please check your internet connection....
  </h1>
    )
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="hero">
      <div className="filter-search">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
          data-testid="search"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants)
            }}
          >
            Search
          </button>
          <input type="text" onChange={(e)=> setUserName(e.target.value)}/>
        </div>
        <div className="button-filter">
          <button
            className="filter-btn"
            onClick={() => {
              let filterdlist = listOfRestaurants.filter(
                (item) => item.info.avgRating > 4
              );
              setFilteredRestaurants(filterdlist);
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="container">
        {filteredRestaurants.map((restaurant) => (
          
          <Link  key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id }>
            {restaurant.info.isOpen ? (<NewPromotedCard resData={restaurant?.info}/>) : (<RestaurentCard  resData={restaurant?.info}/>)}
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Hero;
