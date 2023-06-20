import React, { useState, useEffect } from "react";
import { getProducts } from "../hooks/useGetProducts";
import Button from "../components/Button";
import "../styles/Products.css";
import Item from "../components/Item";

const Products = () => {
  const [data, setData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 36

  useEffect(() => {
    const getData = async () => {
      const API = "https://magdal.live";
      const end = "api/products/";
      try {
        const fetchedData = await getProducts(API, end);
        setData(fetchedData);
        setVisibleProducts(fetchedData.slice(0, productsPerPage));
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const totalPages = Math.ceil(data.length / productsPerPage);

  const handleLoadMore = () => {
    const nextPage = currentPage + 2;
    const startIndex = (nextPage - 1) * productsPerPage;
    const endIndex = nextPage * productsPerPage;
    const nextBatch = data.slice(startIndex, endIndex);
    setVisibleProducts([...visibleProducts, ...nextBatch]);
    setCurrentPage(nextPage);
  };

  return (
    <div className="items">
      {visibleProducts.map((product) => (
        <Item
          product={product}
          key={product.id}
        />
      ))}
      {currentPage < totalPages && (
        <Button func={handleLoadMore} text='Show More' classname='showMore'/>
      )}
      <span className="productsQuantity">{visibleProducts.length} of {data.length}</span>
    </div>
  );
};

export default Products;
