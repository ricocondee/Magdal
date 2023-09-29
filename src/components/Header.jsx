import React, { useState, useContext } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import Categories from "../containers/Categories";
import Logo from "../assets/magdalLogo1.svg";
import SelectCategories from "../containers/SelectCategories";
import "../styles/header.css";
import CartIcon from "./CartIcon";
import FavIcon from "./FavIcon";
import LoginItem from "./LoginItem";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState(false);
  const [word, setWord] = useState(false);
  const { wordToSearch } = useContext(AppContext)

  const handleCategories = () => {
    setCategories(!categories);
  };

  const handleSearch = () => {
    wordToSearch(word)
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Magdal Logo" />
          </a>
        </div>

        <div className="categ__menu">
          <MdMenu className="MdMenu" onClick={handleCategories} />{" "}
        </div>
        <div className="search">
          <div className="search__box">
            <SelectCategories />
            { //do an specific search such as "iphone, samsung, shirt, skirt, shoes, etc."}
            <input type="text" name="search" id="search" placeholder="Specific Search" onChange={(ev)=> setWord(ev.target.value)}/>
            <div className="MdSearch">
             <Link to='/search' onClick={handleSearch} ><MdSearch  /></Link> 
            </div>
          </div>
        </div>
        <div className="headerItems">
          <FavIcon />
          <Link to='/cart'><CartIcon /* func={handleCart} */ /></Link> 
          <LoginItem />
        </div>
      </header>
      {categories && <Categories />}
    </>
  );
};

export default Header;
