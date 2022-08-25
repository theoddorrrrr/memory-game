import React from "react";
import { useNavigate } from "react-router-dom";

const LoginInput = ({ username, setUsername, isClickedBtn, goPlay }) => {
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUsername(e.target.value);

    if (e.target.value.trim().length !== 0 && e.key === "Enter") {
      goPlay()
    }
  };

  return (
    <label className="login__label">
      <input
        className="login__input"
        placeholder="Enter your nickname"
        onKeyUp={inputHandler}
      />
      <small
        className={isClickedBtn && username.trim() === "" ? "_visible" : ""}
      >
        please enter your name
      </small>
    </label>
  );
};

export default LoginInput;
