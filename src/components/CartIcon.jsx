import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import stylesHeaderItems from '../styles/headerItems.module.css'


const CartItem = () => {
  return (
    <button className={stylesHeaderItems.container}>
      <MdShoppingCart className={stylesHeaderItems.MdShCart} />
    <span>Cart</span>
    </button>
  )
}

export default CartItem