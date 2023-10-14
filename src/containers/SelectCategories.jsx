import React, { useState, useEffect } from "react";
import {getProducts} from "../hooks/useGetProducts";

const SelectCategories = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const API = "https://storeapi-dev.fl0.io";
      const end = "api/categories";
      try {
        const data = await getProducts(API, end);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <select>
        <option defaultValue="ALL"value="All">All</option>
      {data?.map(categ => <option key={categ.id} value={categ.category}>{categ.category}</option>)}
    </select>
  );
};

export default SelectCategories;
