import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const Results = ({ isResult, moves, time }) => {
  const navigate = useNavigate();
  const { username, gamemode } = useAuth();

  return (
    <div className={isResult ? "game-end game-end_show" : "game-end"}>
      <div className="game-end__body">
        <div className="game-end__info">
          <h2 className="game-end__title">Congratulations!</h2>
          <div className="game-end__username">
            <span>Username: </span>
            <p>{username}</p>
          </div>
          <div className="game-end__gamemode">
            <span>Gamemode: </span>
            <p>{gamemode}</p>
          </div>
          <div className="game-end__moves">
            <span>Moves: </span>
            <p>{moves}</p>
          </div>
          <div className="game-end__time">
            <span>Time: </span>
            <p>{time}</p>
          </div>
          <div className="game-end__score">
            <span>Score: </span>
            <p>{time * moves}</p>
          </div>

          <div onClick={() => navigate("/leaderboards")}>
            <button className="game-end__btn btn game-end__leaderboards">
              Leaderboards
            </button>
          </div>
          <div onClick={() => navigate("/")}>
            <button className="game-end__btn btn game-end__leaderboards">
              Back to menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
