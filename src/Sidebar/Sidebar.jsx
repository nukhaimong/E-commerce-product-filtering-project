import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h2>
            <AiOutlineShoppingCart />
          </h2>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
