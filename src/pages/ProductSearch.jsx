import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../hooks/useGetProducts";
import AppContext from "../context/AppContext";
import Item from "../components/Item";
import searchStyles from "../styles/search.module.css";

const ProductSearch = () => {
  const { search } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);//estado para manejar la carga de la busqueda
  useEffect(() => {
    const getData = async () => {
      const API = "https://magdal.live";
      const end = `api/products/search/${search}`;
      try {
        const fetchedData = await getProducts(API, end);
        setData(fetchedData);
        setLoaded(true)
      } catch (err) {
        console.table(err);
      }
    };
    if (search && !loaded) {// verifico que search exista y no este vacio ademas si loaded no es falso se hace el llamado a la data esto se realizo para cortar las peticiones a la api una vez se obtenga la data.
      getData();
    }else{
      setLoaded(false)//reiniciamos el loaded para que permita hacer una nueva busqueda.
    }
  }, [search, data]);
  return (
    <div className={searchStyles.items}>
      {data.map((searched) => (
        <Item product={searched} key={searched.id} />
      ))}
    </div>
  );
};

export default ProductSearch;
