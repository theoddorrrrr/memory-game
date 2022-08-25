import React from "react";

const Gamemode = ({ gamemode, setGamemode }) => {
  return (
    <div className="game-mode">
      <label
        className="game-mode__label"
        onClick={() => setGamemode("practice")}
      >
        <input
          type="radio"
          name="gamemode"
          value="practice"
          id="practice"
        />
        <label className={gamemode === 'practice' ? "active" : ""}>
          <span>Practice</span>
        </label>
      </label>
      <label
        className="game-mode__label"
        onClick={() => setGamemode("time-attack")}
      >
        <input
          type="radio"
          name="gamemode" 
          value="time-attack"
          id="time-attack"
        />
        <label className={gamemode === 'time-attack' ? "active" : ""}>
          <span>Time-Attack</span>
        </label>
      </label>
    </div>
  );
};

export default Gamemode;
