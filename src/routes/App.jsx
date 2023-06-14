import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";
import Home from '../pages/Home'
import FullProduct from "../pages/FullProduct";
import Login from "../components/Login";
import CartPage from "../pages/CartPage";
const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/product" element={<FullProduct />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/cart" element={<CartPage />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
