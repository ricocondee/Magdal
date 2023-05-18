import React, { useState, useEffect } from "react";
import BrandItem from "../components/BrandItem";
import {getProducts} from "../hooks/useGetProducts";
import brandsStyles from "../styles/brands.module.css";

const Brands = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const API = "https://myfakestoreapi.onrender.com";
      const end = "api/brands";
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
    <div className={brandsStyles.container}>
      <div className={brandsStyles.brands}>
        {data?.map((brand) => (
          <BrandItem key={brand.id} logo={brand.image} alt={brand.name} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
