import React from "react";
import "./card.scss";

const Card = ({ card }) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-face card-font-face">
        <img
          src="https://images.unsplash.com/photo-1601027847350-0285867c31f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="card"
        />
      </div>
      <div className="card-face card-back-face">
        <img src={card.img} alt="card" />
      </div>
    </div>
  );
};

export default Card;
