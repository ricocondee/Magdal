import React, { useState, useEffect } from "react";
import getProducts from "../hooks/useGetProducts";
import Slider from "../components/Slider";
import homeStyles from "../styles/home.module.css";
import Card from "../components/Card";
import promoProduct1 from "../assets/promoProduct.webp";
import CategoriesImage from "../containers/CategoriesImage";
import Brands from "../containers/Brands";
import Products from "../containers/Products";

const Home = () => {
  const [phones, setPhones] = useState(null);
  useEffect(() => {
    const getHeadphones = async () => {
      const API = "https://myfakestoreapi.onrender.com";
      const endPh = "api/products/type/phone";
      try {
        const phones = await getProducts(API, endPh);
        setPhones(phones);
      } catch (err) {
        console.log(err);
      }
    };
    getHeadphones();
  }, []);
      return (
        <>
          <div className={homeStyles.promoContainer}>
            <Slider
              text="50% Off On Selected Headphones"
              image={promoProduct1}
            />
            {phones && <Card
              title={`${phones[7].brand === 1 ? "Apple" : "Samsung"} ${
                phones[7].name
              } ${phones[7].color} ${phones[7].ram} ${phones[7].rom}`}
              image={phones[7].image}
              details="limited time offer"
              price={phones[7].price}
            />}
            {phones && <Card
              title={`${phones[19].brand === 1 ? "Apple" : "Samsung"} ${
                phones[19].name
              } ${phones[19].color} ${phones[19].ram} ${phones[19].rom}`}
              image={phones[19].image}
              details="limited time offer"
              price={phones[19].price}
            />}
          </div>
          <CategoriesImage />
          <Products />
          <Brands />
        </>
      );
    }

export default Home;
