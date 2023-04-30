import React, { useState, useEffect } from "react";
import getProducts from "../hooks/useGetProducts";
import "../styles/Products.css";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState(null);
  const [productData, setProductData] = useState(null);

  console.log(productData)
  
  const handleProductData = (itemId) =>{
    fetch(`https://myfakestoreapi.onrender.com/api/products/${itemId}`)
    .then(res => res.json())
    .then(pData => setProductData(pData))
    .catch(err => console.log(err))
  }

  useEffect(() => {//hook par allamar la api al iniciar la pagina, [tarea: en lo posible unificar todos los llamados a la api en un archivo]
    const getData = async () => {
      const API = "https://myfakestoreapi.onrender.com";
      const end = "api/products";
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
    <div className="items">
      {data &&
        data.map((item) => (
          <Link to={`/product`} onClick={() => handleProductData(item.id)} key={item.id}>
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              color={item.color}
              brand={item.brand}
              price={item.price}
              ram={item.ram}
              rom={item.rom}
              image={item.image}
              colorSample={item.color}
            />
          </Link>
        ))}
    </div>
  );
};

export default Products;
