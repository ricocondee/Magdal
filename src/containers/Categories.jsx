import React, { useState, useEffect } from "react";
import {getProducts} from "../hooks/useGetProducts";
import "../styles/categories.css";

const Categories = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const API = "https://myfakestoreapi.onrender.com";
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
    <nav className="nav__categories">
      <ul>
      {data?.map(categ => <li key={categ.id}><a href="/">{categ.category}</a></li>)}
      </ul>
    </nav>
  );
};

export default Categories;
