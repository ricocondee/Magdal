import React, { useState, useEffect } from "react";
import BrandItem from "../components/BrandItem";
import {getProducts} from "../hooks/useGetProducts";
import brandsStyles from "../styles/brands.module.css";
import Skeleton from "../components/Skeleton";

const Brands = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const API = "https://storeapi-dev.fl0.io";
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

    if(!data){
      return <Skeleton/>
    }

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
