import React,{ useContext} from "react";
import AppContext from "../context/AppContext";

const TotalPrice = ({ func }) => {
    const { cart } = useContext(AppContext);
    const totalPrice = () => {
        const reducer = (accum, currentValue) => accum + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return parseFloat(sum).toFixed(2);
      };
  return (
    <div>
      <p>
        <span>Total</span>
      </p>
      <p>${totalPrice}</p>
      <button className="">Checkout</button>
    </div>
  );
};

export default TotalPrice;
