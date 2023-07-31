import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import TotalStyles from "../styles/total.module.css";
import Button from "../components/Button";

const TotalPrice = ({ func }) => {
  const { cart } = useContext(AppContext);
  const totalPrice = () => {
    const reducer = (accum, currentValue) => accum + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return parseFloat(sum).toFixed(2);
  };
  return (
    <div className={TotalStyles.container}>
      <div className={TotalStyles.content}>
        <h2>Order Summary</h2>
        <div className={TotalStyles.coupons}>
          <form action="" className={TotalStyles.form}>
            <div className={TotalStyles.btns}>
              <input type="text" placeholder="Add a Coupon"/> <Button text="Add" classname={TotalStyles.addButton}/>
            </div>
          </form>
        </div>
        <div className={TotalStyles.details}>
            <div className={TotalStyles.dt1}>
              <span>Subtotal</span>
              <strong>${totalPrice()}</strong>
            </div>
            <div className={TotalStyles.dt2}>
              <span>Shipping</span>
              <strong>Free</strong>
            </div>
            <div className={TotalStyles.dt3}>
              <span>Taxes</span>
              <strong>0%</strong>
            </div>
            <div className={TotalStyles.dt4}>
              <span>Total</span>
              <strong>${totalPrice()}</strong>
            </div>
          </div>
          <Button text="Checkout" classname={TotalStyles.checkOutBtn}/>
      </div>
    </div>
  );
};

export default TotalPrice;
