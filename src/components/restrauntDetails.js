import React  from "react";
import useRestaurantMenu from "../utils/restrauntMenu";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { resId } = useParams();
  const menuDetails = useRestaurantMenu(resId);
  
  console.log(menuDetails);
    
  return (
    <React.Fragment>
      {resId}
    </React.Fragment>
  );
};

export default Menu;
