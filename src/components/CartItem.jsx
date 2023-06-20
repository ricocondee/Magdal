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
        <p>{product.name}</p>
        <p>${product.price}</p>
        <MdDelete onClick={() => handleRemove(product)} className={cartItemStyles.delete} />
      </div>
    </div>
  );
};

export default CartItem;
