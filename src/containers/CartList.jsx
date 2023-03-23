import React, {useContext} from 'react'
import CartItem from '../components/CartItem'
import AppContext from '../context/AppContext'
import cartListStyles from '../styles/cartList.module.css'

const CartList = () => {
  const {state} = useContext(AppContext);
  const totalPrice = () =>{
    const reducer = (accum, currentValue) => accum + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <div className={cartListStyles.container}>
      {state.cart.map(product => (<CartItem product={product} key={product.item}/>))}
      <div className="">
					<p>
						<span>Total</span>
					</p>
					<p>${totalPrice()}</p>
				</div>
				<button className="">
					Checkout
				</button>
    </div>
  )
}

export default CartList