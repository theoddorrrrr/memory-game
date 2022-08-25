import { useEffect, useState } from "react";
import Card from "../Card";
import "./App.scss";
import {data} from "../../data"

function Game() {
  const [cards, setCards] = useState(data);
  const [openCards, setOpenCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);

  console.log(data);
  
  const handleCardClick = () => {
  };


  const handleRestart = () => {
  };

  return (
    <div className="game">
      <div className="game__container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
