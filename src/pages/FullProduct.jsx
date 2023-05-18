import { React, useEffect, useState } from "react";
import fullProductStyles from "../styles/fullProduct.module.css";
import { handleProductData } from "../hooks/useGetProducts"; //importo a modo hook la funcion abstracta para obtener el producto seleccionado

const FullProduct = () => {
  const [productData, setProductData] = useState(null);//estado para producto seleccionado
  useEffect(() => {
    const getSelectedProductData = async () => { // funcion asincrona para obtener la info del producto selecionado
      try {
        const item = await handleProductData(localStorage.getItem("itemID"));//espero por la data y la capturo con ayuda del localstorage
        setProductData(item);//seteo el valor
      } catch (err) {
        console.table(err);
      }
    };
    getSelectedProductData();//llamo a la funcion
  }, []);
  //A ESTE PUNTO LO QUE QUEDA ES MAQUETAR BIEN, YA LOS DATOS ESTAN SIENDO OBTENIDOS//
  return (
    <div className={fullProductStyles.container}>
      {productData?.map((prod) => (
        <div key={prod.id}>
          <img src={prod.image} alt="" />
          <form action="">
            <h1>{prod.name}</h1>
            <p>{prod.name} {prod.color} {prod.rom} {prod.ram}</p>
            <span>{prod.price}</span>
          </form>
        </div>
      ))}
    </div>
  );
};

export default FullProduct;
