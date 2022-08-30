import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gamemode from "../Gamemode/Gamemode";
import Select from "../Select";

import "./leaderboards.scss";
import User from "./User";

const Leaderboards = ({ gamemode, setGamemode }) => {
  const navigate = useNavigate();
  let users = JSON.parse(localStorage.getItem("leaderboards")) || [];

  const [select, setSelect] = useState("score");

  if (users.length > 0) {
    users =
      gamemode === "easy"
        ? users.filter((item) => item.gamemode === "easy")
        : users.filter((item) => item.gamemode === "hard");
  }

  useEffect(() => {
    console.log(select);
    console.log(users);
  }, [select, gamemode]);

  return (
    <div className="leaderboards">
      <div className="leaderboards__body">
        <div onClick={() => navigate("/")}>
          <div className="leaderboards__back">
            <span>back to menu</span>
          </div>
        </div>
        <Gamemode gamemode={gamemode} setGamemode={setGamemode} />
        <Select setSelect={setSelect} />
        {users.length > 0 && (
          <h1 className="leaderboards__title">Leaderboards </h1>
        )}
        <div className="leaderboards__info">
          <span>Username</span>
          {select === "score" ? (
            <span>Score</span>
          ) : select === "time" ? (
            <span>Time</span>
          ) : (
            <span>Moves</span>
          )}
        </div>
        <ul className="leaderboards__list">
          {users.length === 0 ? (
            <div className="leaderboards__empty">
              The Leaderboards are empty
            </div>
          ) : (
            users
              .sort((a, b) => a.score - b.score)
              .map((item, index) => (
                <User user={item} key={index} select={select} />
              ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboards;
