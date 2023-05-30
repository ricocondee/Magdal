import { React, useEffect, useState } from "react";
import fullProductStyles from "../styles/fullProduct.module.css";
import description from "../hooks/useDescription";
import Button from "../components/Button";
import { handleProductData } from "../hooks/useGetProducts"; //importo a modo hook la funcion abstracta para obtener el producto seleccionado

const FullProduct = () => {
  const [productData, setProductData] = useState(null); //estado para producto seleccionado
  const [quantity, setQuantity] = useState(1);
  const more = (ev) => {
    ev.preventDefault();
    setQuantity(quantity + 1);
  };
  const less = (ev) => {
    ev.preventDefault();
    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };
  useEffect(() => {
    const getSelectedProductData = async () => {
      // funcion asincrona para obtener la info del producto selecionado
      try {
        const item = await handleProductData(localStorage.getItem("itemID")); //espero por la data y la capturo con ayuda del localstorage
        setProductData(item); //seteo el valor
      } catch (err) {
        console.table(err);
      }
    };
    getSelectedProductData(); //llamo a la funcion
  }, []);
  //A ESTE PUNTO LO QUE QUEDA ES MAQUETAR BIEN, YA LOS DATOS ESTAN SIENDO OBTENIDOS//

  return (
    <div className={fullProductStyles.container}>
      {productData?.map((prod) => (
        <form
          action="/product"
          key={prod.id}
          className={fullProductStyles.form}
        >
          <div className={fullProductStyles.imageContainer}>
            <img src={prod.image} alt="" />
          </div>
          <div className={fullProductStyles.detailsContainer}>
            <h1>
              {prod.name} {prod.color}
            </h1>
            <p>{description[prod.id]}</p>
            <div className={fullProductStyles.specs}>
              <ul>
                {prod.so === null ? "" : <li>{prod.so}</li>}
                {prod.rom === null ? "" : <li>{prod.rom}</li>}
                {prod.ram === null ? "" : <li>{prod.ram}</li>}
                {prod.cpu === null ? "" : <li>{prod.cpu}</li>}
                {prod.size === null ? "" : <li>{prod.size}</li>}
                {prod.color === null ? "" : <li>{prod.color}</li>}
              </ul>
            </div>
            <span className={fullProductStyles.price}>{prod.price}</span>
            <div className={fullProductStyles.quantitySetter}>
              <Button
                text="-"
                func={less}
                classname={fullProductStyles.lessBtn}
              />
              {quantity}
              <Button
                text="+"
                func={more}
                classname={fullProductStyles.moreBtn}
              />
            </div>
            <div className={fullProductStyles.actionBtns}>
              <Button text="Buy Now" classname={fullProductStyles.buyNow} />
              <Button text="Add to cart" classname={fullProductStyles.addToC} />
            </div>
          </div>
        </form>
      ))}
    </div>
  );
};

export default FullProduct;
