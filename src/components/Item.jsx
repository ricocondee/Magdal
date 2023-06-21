import React, { useState, useContext } from "react";
import Button from "../components/Button";
import itemStyles from "../styles/item.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import { handleProductData } from "../hooks/useGetProducts";

const Item = ({ product }) => {
  const [check, setCheck] = useState(false);
  const handdleCheck = () => {
    setCheck(!check);
  };

  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={itemStyles.item}>
      <div className={itemStyles.imageContainer}>
        <div className={itemStyles.favorite}>
          <label htmlFor={product.id}>
            {check ? <MdFavorite /> : <MdFavoriteBorder />}
          </label>
          <input
            type="checkbox"
            name="fav"
            id={product.id}
            className={itemStyles.hidden}
            onChange={handdleCheck}
          />
        </div>
        <img src={product.image} alt={product.name + " " + product.color} />
      </div>
      <div className={itemStyles.detailsContainer}>
        <div className={itemStyles.title}>
          <Link to={`/product`} onClick={() => handleProductData(product.id)}>{product.brand === 1
              ? "Apple "
              : product.brand === 2
              ? "Samsung "
              : ""}
            {product.name} {product.color} {product.rom} {product.ram}</Link>
        </div>
        <div className={itemStyles.details}>
          <div
            className={
              product.color ? itemStyles.colorContainer : itemStyles.empty
            }
          >
            <span>Color: </span>
            <div
              className={product.color ? itemStyles.colorSample : ""}
              style={{ backgroundColor: product.color }}
            ></div>
          </div>
          <div className={itemStyles.prices}>
            <span className={itemStyles.price}>{product.price}</span>
            <span className={itemStyles.oldPrice}>
              {(
                parseFloat(product.price) * 0.35 +
                parseFloat(product.price)
              ).toFixed(2)}
            </span>
          </div>
        </div>
        <div className={itemStyles.buttonContainer}>
          <Button
            text="Add to Cart"
            classname={itemStyles.addButton}
            func={()=> handleClick(product)}
          />
          <Button text="Buy Now" classname={itemStyles.buyButton} />
        </div>
      </div>
    </div>
  );
};

export default Item;
