import { CDN_URL } from "../utils/constants";
import { useTheme } from "../themeConfig";

const RestaurantCard = ({
  details: { cloudinaryImageId, name, avgRating, cuisines },
}) => {
  const {theme} = useTheme()
  console.log(theme);
  return (
    <div className={`m-8 p-4 w-72 ${theme==='dark' ? 'bg-gray-600' :'bg-gray-300'} border-4 border-slate-300 rounded box-border shadow-lg`}>
      <img
        className="w-72 h-36 rounded"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex justify-between">
        <h3 className="mt-2 font-medium">{name}</h3>
        <span
          className={`${
            parseInt(avgRating) > 3 ? "bg-green-800" : "bg-green-500"
          } font-extralight h-6 w-6 text-sm text-white m-1 rounded p-0.5`}
        >
          {avgRating}
        </span>
      </div>
      <h4 className="mt-1 font-light">{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
