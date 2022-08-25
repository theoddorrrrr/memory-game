import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gamemode from "../Gamemode/Gamemode";
import "./login.scss";
import LoginInput from "./LoginInput";
import PlayButton from "./PlayButton";

const Login = () => {
  const [gamemode, setGamemode] = useState("time-attack");
  const [username, setUsername] = useState("");
  const [isClickedBtn, setIsClickedBtn] = useState(false);

  const navigate = useNavigate()

  const goPlay = () => {
    navigate('game')
    localStorage.setItem('user', JSON.stringify({username: username, gamemode: gamemode}))
  }

  return (
    <div className="login__container">
      <div className="login">
        <h1 className="login__title">Memory game</h1>
        <LoginInput
          username={username}
          setUsername={setUsername}
          isClickedBtn={isClickedBtn}
          goPlay={goPlay}
        />
        <Gamemode gamemode={gamemode} setGamemode={setGamemode} />
        <Link className="btn btn-leaderboards" to="leaderboards">
          Leaderboards
        </Link>
        <Link className="btn btn-leaderboards" to="Rules">
          Rules
        </Link>
        <PlayButton username={username} setIsClickedBtn={setIsClickedBtn} goPlay={goPlay}/>
      </div>
    </div>
  );
};

export default Login;
