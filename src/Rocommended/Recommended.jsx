import React from "react";
import "./Recommended.css";
import Button from "../Component/Button";

const Recommended = ({ handleButtonClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            onClickHandler={handleButtonClick}
            value=""
            title="All product"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Nike"
            title="Nike"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Adidas"
            title="Adidas"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Puma"
            title="Puma"
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Vans"
            title="Vans"
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
