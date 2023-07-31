import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { MdDelete } from "react-icons/md";
import cartItemStyles from "../styles/cartItem.module.css";

const CartItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (item) => {
    removeFromCart(item);
  };
  return (
    <div className={cartItemStyles.container}>
      <figure className={cartItemStyles.imageContainer}>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className={cartItemStyles.info}>
        <strong>{product.name}</strong>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <div className={cartItemStyles.delete}><MdDelete onClick={() => handleRemove(product)} /></div>
      
    </div>
  );
};

export default CartItem;
