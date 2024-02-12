import React, { useEffect, useState } from "react";
import Body from "./body";
import { API_URL } from "../utils/constants";

const Landing = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [value, setValue] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();

      setFilterData(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setData(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      alert(err);
    }
  };

  const onSearch = (searchValue) => {
    const searchArray = data.filter((item) => {
      return Object.values(item.info).some((value) => {
        if (value && typeof value === "string") {
          return value.toLowerCase().includes(searchValue.toLowerCase());
        }
        return false;
      });
    });
    setFilterData(searchArray);
  };

  const onKeysSearch = (searchValue, keys) => {
    const searchArray = data.filter((item) => {
      return keys.some((key) => {
        let value = item?.info?.[key];
        if (Array.isArray(value)) {
          return value.some((val) =>
            val.toLowerCase().includes(searchValue.toLowerCase())
          );
        } else if (value && typeof value === "string") {
          return value.toLowerCase().includes(searchValue.toLowerCase());
        }
        return false;
      });
    });
    setFilterData(searchArray);
  };

  const onChange = (event) => {
    let { value } = event.target;
    setValue(value);
    onKeysSearch(value, ["cuisines"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="ml-8  mt-3 mb-3">
        <label className="font-light">
          Search for restaurants or food{"  "}
        </label>
        <input
          className="w-64 h-6 rounded text-black p-2 m-2"
          placeholder="Burger King or Biryani"
          value={value}
          onChange={onChange}
        />
      </div>
      <Body data={filterData} />
    </div>
  );
};

export default Landing;
