import React from "react";
import "./header.scss";

const Header = ({ count, username, moves, showModal, setShowModal }) => {
const menuHandler = () => {
  setShowModal(true)
}

  return (
    <>
      <button className="icon-menu" onClick={menuHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="game__header">
        <div className="username">
          <span>Player:</span>
          <p className="game__username">{username}</p>
        </div>
        <div className="moves">
          <span>Moves: </span>
          <p className="game__score">{moves}</p>
        </div>
        <div className="time">
          <span>Time:</span>
          <p className="game__time">{count}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
