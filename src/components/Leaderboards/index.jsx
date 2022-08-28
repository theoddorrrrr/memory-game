import React from "react";
import { useNavigate } from "react-router-dom";

import "./leaderboards.scss";
import User from "./User";

const Leaderboards = ({ gamemode, setGamemode }) => {
  const navigate = useNavigate();
  let users = JSON.parse(localStorage.getItem("leaderboards")) || [];

  if (users.length > 0) {
    users =
      gamemode === "easy"
        ? users.filter((item) => item.gamemode === "easy")
        : users.filter((item) => item.gamemode === "hard");
  }

  return (
    <div className="leaderboards">
      <div className="leaderboards__body">
        <div onClick={() => navigate("/")}>
          <div className="leaderboards__back">
            <span>back to menu</span>
          </div>
        </div>
        <div className="game-mode">
          <label
            className="game-mode__label"
            onClick={() => setGamemode("easy")}
          >
            <input type="radio" name="gamemode" value="easy" id="easy" />
            <label className={gamemode === "easy" ? "active" : ""}>
              <span>Easy</span>
            </label>
          </label>
          <label
            className="game-mode__label"
            onClick={() => setGamemode("hard")}
          >
            <input type="radio" name="gamemode" value="hard" id="hard" />
            <label className={gamemode === "hard" ? "active" : ""}>
              <span>Hard</span>
            </label>
          </label>
        </div>
        <h1 className="leaderboards__title">Leaderboards </h1>
        <div className="leaderboards__info">
          <span>Username</span>
          <span>Score</span>
        </div>
        <ul className="leaderboards__list">
          {users.length === 0 ? (
            <div className="leaderboards__empty">
              The Leaderboards are empty
            </div>
          ) : (
            users.map((item, index) => <User user={item} key={index} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboards;
