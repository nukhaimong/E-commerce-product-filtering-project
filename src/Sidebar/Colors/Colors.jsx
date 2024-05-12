import React from "react";
import "./Colors.css";
import Input from "../../Component/Input";
const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title colors-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="test3" value="" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test3"
        color="white"
      />
    </div>
  );
};

export default Colors;
