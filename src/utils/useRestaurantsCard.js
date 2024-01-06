
import { useState, useEffect } from "react";

const useRestaurantsMenu = ()=>{
 
    
  const [listOfRestaurants, setListofrestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5691957&lng=77.2886424&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
        setListofrestaurants(
          json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurants(
          json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
        );
      };
    return listOfRestaurants

}

export default useRestaurantsMenu;