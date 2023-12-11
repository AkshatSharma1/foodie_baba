// ? Restraunt Card component

import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {

  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo
  } = resData?.info

  return (
    <>
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="food"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating ? avgRating : "0"} Rating</h4>
        <h4>{costForTwo}</h4>
      </div>
    </>
  );
};

export default RestrauntCard;
