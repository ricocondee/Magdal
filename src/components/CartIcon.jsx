import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import stylesHeaderItems from '../styles/headerItems.module.css'


const CartIcon = ({func}) => {
  return (
    <button className={stylesHeaderItems.container} onClick={func}>
      <MdShoppingCart className={stylesHeaderItems.MdShCart} />
    <span>Cart</span>
    </button>
  )
}

export default CartIcon