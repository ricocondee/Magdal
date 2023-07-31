import React from 'react'
import CartList from '../containers/CartList'
import cartStyles from '../styles/cart.module.css'
import TotalPrice from '../components/Checkout'

const CartPage = () => {
  return (
    <div className={cartStyles.container}>
        <CartList/>
        <TotalPrice/>
    </div>
  )
}

export default CartPage