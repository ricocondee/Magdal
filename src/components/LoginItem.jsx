import React from "react";
import { MdLogin } from "react-icons/md";
import headerItems from "../styles/headerItems.module.css";
import { Link } from "react-router-dom";
const LoginItem = () => {
  return (
    <Link to="login" className={headerItems.container}>
      <MdLogin className={headerItems.MdLogin} />
      <span>Login</span>
    </Link>
  );
};

export default LoginItem;
