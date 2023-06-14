import React from 'react'
import { MdLogin } from 'react-icons/md'
import headerItems from '../styles/headerItems.module.css'
const LoginItem = () => {
  return (
    <div className={headerItems.container}><MdLogin className={headerItems.MdLogin}/>
    <a href="/Login"><span>Login</span></a></div>
  )
}

export default LoginItem