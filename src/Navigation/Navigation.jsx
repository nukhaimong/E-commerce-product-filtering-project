import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import React from "react";
import "./Navigation.css";
const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          value={query}
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
