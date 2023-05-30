import React, { useState } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import Categories from "../containers/Categories";
import Logo from "../assets/magdalLogo1.svg";
import SelectCategories from "../containers/SelectCategories";
import "../styles/header.css";
import CartIcon from "./CartIcon";
import FavIcon from "./FavIcon";
import LoginItem from "./LoginItem";
import InfoHeader from "./InfoHeader"

const Header = () => {
  const [categories, setCategories] = useState(false);
  const handleCategories = () => {
    setCategories(!categories);
  };

  return (
    <>
    <InfoHeader/>
      <header className="header">
        <div className="logo">
          <a href="/"><img src={Logo} alt="Magdal Logo" /></a>
          
        </div>

        <div className="categ__menu">
          <MdMenu className="MdMenu" onClick={handleCategories} />{" "}
        </div>
        <div className="search">
          <div className="search__box">
            <SelectCategories />
            <input type="text" name="search" id="" placeholder="Search" />
            <div className="MdSearch">
              <MdSearch />
            </div>
          </div>
        </div>
        <div className="headerItems">
          <FavIcon />
          <CartIcon />
          <LoginItem/>
        </div>
      </header>
      {categories && <Categories />}
    </>
  );
};

export default Header;
