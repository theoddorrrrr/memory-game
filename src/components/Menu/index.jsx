import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={showModal ? "game-menu game-menu_visible" : "game-menu"}>
        <div className="game-menu__body">
          <button className="btn btn-continue" onClick={() => setShowModal(false)}>
            Continue
          </button>
          <div onClick={() => navigate("/")}>
            <button className="btn btn-exit">Exit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
