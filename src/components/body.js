import React from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = (props) => {
  const { data } = props;
  if (data?.length === 0) return <Shimmer />;
  else
    return (
      <div className="flex flex-row  flex-wrap">
        {data.map((rest, index) => (
          <Link to={`restaurant-menu/${rest?.info?.id}`} key={rest?.info?.id}>
            <RestrauntCard details={rest?.info} />
          </Link>
        ))}
      </div>
    );
};
export default Body;
