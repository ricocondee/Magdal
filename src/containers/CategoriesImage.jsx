import React, { useState, useEffect } from "react";
import {getProducts} from "../hooks/useGetProducts";
import ItemImage from "../components/ItemImage";
import catImgStyles from "../styles/categImg.module.css";

const CategoriesImage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const API = "https://magdal.live";
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
    <div className={catImgStyles.container}>
      <span>Shop by Categories</span>
      <div className={catImgStyles.content}>
        {data?.map((categ) => (
          <ItemImage key={categ.id} image={categ.image} alt={categ.category} category={categ.category}/>
        ))}
      </div>
    </div>
  );
};

export default CategoriesImage;
