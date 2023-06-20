import React, { useContext} from "react";
import CartItem from "../components/CartItem";
import AppContext from "../context/AppContext";
import cartListStyles from "../styles/cartList.module.css";

const CartList = () => {
  const { cart } = useContext(AppContext);
  return (
    <div className={cartListStyles.container}>
      {cart.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default CartList;
