import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";

// ? Body Component
const Body = () => {
  return (
    <div className="body">
      {/* <div className="search-bar"> Search </div> */}
      <div className="filter">
        <button className="filter-btn">Top Rated Restraunts</button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestrauntCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
