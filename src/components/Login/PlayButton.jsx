import React from "react";
import { useNavigate } from "react-router-dom";

const PlayButton = ({ username, setIsClickedBtn, goPlay }) => {
  const buttonHandler = () => {
    if (username.trim().length !== 0) {
      goPlay();
    }

    setIsClickedBtn(true);
  };

  return (
    <button className="btn btn-play" onClick={buttonHandler}>
      Play
    </button>
  );
};

export default PlayButton;
