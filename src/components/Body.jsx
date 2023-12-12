import { useEffect, useState } from "react";

// import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

// ? Body Component
const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const topRestraunts = () => {
    let filteredList = restrauntList.filter((res) => res.info.avgRating > 4);
    setRestrauntList(filteredList);
  };

  // ! Fetch Data
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=32.7671925&lng=74.8412458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json)
    // setRestrauntList(json.data.cards[3].card.card["gridElements"]["infoWithStyle"].restaurants)
    setRestrauntList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // * Use Effect => called after component renders
  useEffect(() => {
    // As sson as component is rendered fetch the data
    fetchData();
  }, []);

  // * Search Restaurants
  const searchRestaurants = () => {
    const filteredRestaurants = restrauntList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredResList(filteredRestaurants);
  };

  // * Using Shimmer UI to fake page content skeleton till api loads data
  // Conditional Rendering
  return restrauntList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          className="searchBox"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchRestaurants}>Search</button>
      </div>
      <div className="filter">
        <button className="top-resBtn" onClick={() => topRestraunts()}>
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
          <RestrauntCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
