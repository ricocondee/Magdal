import { useState, useEffect } from "react";

const useInitialState = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {//effect para traer el carrito al cargar el componente
    const storedCart = localStorage.getItem("cart");//persistencia de los productos para evitar que el carrito se vacie al recargar la pagina
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {//effect para setear y actualizar el carrito cada que agrgo un producto
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (payload) => {
    setCart([...cart, payload]);
  };

  const removeFromCart = (payload) => {
    setCart(cart.filter((item) => item.id !== payload.id));
  };

  const wordToSearch = (payload) => {
    setSearch(payload);
  };

  return {
    cart,
    search,
    wordToSearch,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
