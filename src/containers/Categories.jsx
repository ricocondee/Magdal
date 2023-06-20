import React from "react";
import "../styles/categories.css";

const Categories = () => {
  return (
    <nav className="nav__categories">
      
      <ul>
        <span>Electronics</span>
        <li><a href="/phones">Smartphones</a></li>
        <li><a href="/smartwatches">Smartwatches</a></li>
        <li><a href="/headsets">Headsets</a></li>
        <li><a href="/laptops">Laptops</a></li>
      </ul>
      <ul>
        <span>Accesories</span>
        <li><a href="/watches">Classic Watches</a></li>
      </ul>
      <ul>
        <span>Men Clothing</span>
        <li><a href="/watches">Classic Watches</a></li>
      </ul>
    </nav>
  );
};

export default Categories;
