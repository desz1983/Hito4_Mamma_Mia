import "./App.css";
import React from "react";
import Navbar from "./componentes/Navbar";
import Home from "./views/Home";
import Footer from "./componentes/Footer";
import Cart from "./views/Cart";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import Pizzas from "./componentes/Pizzas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/RegisterPage" element={<RegisterPage />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Pizza/p001" element={<Pizzas />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
