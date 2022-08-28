import React from "react";

const LoginInput = ({ username, setUsername, isClickedBtn, goPlay }) => {

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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
