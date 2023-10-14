import React, { useState, useEffect } from "react";
import {getProducts} from "../hooks/useGetProducts";
import Slider from "../components/Slider";
import homeStyles from "../styles/home.module.css";
import Card from "../components/Card";
import promoProduct1 from "../assets/promoProduct.webp";
import CategoriesImage from "../containers/CategoriesImage";
import Brands from "../containers/Brands";
import Products from "../containers/Products";
import Skeleton from '../components/Skeleton'

const Home = () => {
  //componente
  const [phones, setPhones] = useState(null); //estado donde se almacena los datos que se consumen de la API 
  useEffect(() => {
    //hook con funcion asincrona para consumir la api cada que la pagina se actualize [tarea: en lo posible unificar todos los llamados a la api en un archivo]
    const getHeadphones = async () => {
      //se hace asincrona la funcion
      const API = "https://storeapi-dev.fl0.io"; //URL de la API
      const endPh = "api/products/type/phone"; //End Point
      try {
        //Manejo de errores
        const phones = await getProducts(API, endPh); //espero por los datos
        setPhones(phones); //seteo el state
      } catch (err) {
        console.log(err);
      }
    };
    getHeadphones();
  }, []);
  return (
    <>
      <div className={homeStyles.promoContainer}>
        <Slider text="50% Off On Selected Headphones" image={promoProduct1} />
        {phones ? (
          <Card
            title={`${phones[7].brand === 1 ? "Apple" : "Samsung"} ${
              phones[7].name
            } ${phones[7].color} ${phones[7].ram} ${phones[7].rom}`}
            image={phones[7].image}
            details="limited time offer"
            price={phones[7].price}
          />
        ) : <Skeleton/>}
        {phones ? (
          <Card
            title={`${phones[19].brand === 1 ? "Apple" : "Samsung"} ${
              phones[19].name
            } ${phones[19].color} ${phones[19].ram} ${phones[19].rom}`}
            image={phones[19].image}
            details="limited time offer"
            price={phones[19].price}
          />
        ) : <Skeleton/>}
      </div>
      <CategoriesImage />
      <Products />
      <Brands />
    </>
  );
};

export default Home;
