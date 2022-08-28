import React from "react";

const Gamemode = ({ gamemode, setGamemode }) => {
  return (
    <div className="game-mode">
      <label
        className="game-mode__label"
        onClick={() => setGamemode("easy")}
      >
        <input
          type="radio"
          name="gamemode"
          value="easy"
          id="easy"
        />
        <label className={gamemode === 'easy' ? "active" : ""}>
          <span>Easy</span>
        </label>
      </label>
      <label
        className="game-mode__label"
        onClick={() => setGamemode("hard")}
      >
        <input
          type="radio"
          name="gamemode" 
          value="hard"
          id="hard"
        />
        <label className={gamemode === 'hard' ? "active" : ""}>
          <span>Hard</span>
        </label>
      </label>
    </div>
  );
};

export default Gamemode;
