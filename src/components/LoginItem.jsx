import React from 'react'
import { MdLogin } from 'react-icons/md'
import headerItems from '../styles/headerItems.module.css'
const LoginItem = () => {
  return (
    <div className={headerItems.container}><MdLogin className={headerItems.MdLogin}/>
    <span>Login</span></div>
  )
}

export default LoginItem