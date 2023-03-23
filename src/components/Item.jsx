import React, { useState, useContext } from "react";
import Button from "../components/Button";
import itemStyles from "../styles/item.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
const Item = ({
  id,
  name,
  size,
  color,
  brand,
  category,
  price,
  ram,
  rom,
  image,
  colorSample,
}) => {
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
      <div className={itemStyles.image}>
        <div className={itemStyles.favorite}>
          <label htmlFor={id}>
            {check ? <MdFavorite /> : <MdFavoriteBorder />}
          </label>
          <input
            type="checkbox"
            name="fav"
            id={id}
            className={itemStyles.hidden}
            onChange={handdleCheck}
          />
        </div>
        <img src={image} alt={name + " " + color} />
      </div>
      <div className={itemStyles.detailsContainer}>
        <div className={itemStyles.title}>
          <Link to="/product">
            {brand === 1 ? "Apple " : brand === 2 ? "Samsung " : ""}
            {name} {color} {rom} {ram}
          </Link>
        </div>
        <div className={itemStyles.details}>
          <div
            className={
              colorSample ? itemStyles.colorContainer : itemStyles.empty
            }
          >
            <span>Color: </span>
            <div
              className={colorSample ? itemStyles.colorSample : ""}
              style={{ backgroundColor: colorSample }}
            ></div>
          </div>
          <div className={itemStyles.prices}>
            <span className={itemStyles.price}>{price}</span>
            <span className={itemStyles.oldPrice}>
              {(parseFloat(price) * 0.35 + parseFloat(price)).toFixed(2)}
            </span>
          </div>
        </div>
        <div className={itemStyles.buttonContainer}>
          <Button
            text="Add to Cart"
            classname={itemStyles.addButton}
            onClick={() => handleClick}
          />
          <Button text="Buy Now" classname={itemStyles.buyButton} />
        </div>
      </div>
    </div>
  );
};

export default Item;
