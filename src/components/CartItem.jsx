import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (item) => {
    removeFromCart(item);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={item.image[0]} alt={item.name} />
      </figure>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <MdDelete onClick={() => handleRemove(item)}/>
    </div>
  );
};

export default CartItem;
