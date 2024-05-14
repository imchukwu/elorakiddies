import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ELORAKIDDIES</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("clothings");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/clothings">
            Clothings
          </Link>
          {menu === "clothings" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shoes");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shoes">
            Shoes
          </Link>
          {menu === "shoes" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("bags");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/bags">
            Bags
          </Link>
          {menu === "bags" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />{" "}
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
