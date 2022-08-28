import { useEffect, useState } from "react";
import Card from "../Card";
import "./App.scss";

function Game({
  count,
  setCount,
  moves,
  setMoves,
  cards,
  intervalId,
  setIntervalId,
  showModal,
  setIsResult,
}) {
  const [openCards, setOpenCards] = useState([]);
  const [removedCards, setRemovedCards] = useState([]);

  useEffect(() => {
    if (removedCards.length === cards.length) {
      setIsResult(true);
    }
  }, [removedCards]);

  useEffect(() => {
    if (showModal) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        return;
      }
    }
    if (moves > 0 && !showModal) {
      const interval = setInterval(() => {
        if (!showModal) {
          setCount((prev) => prev + 1);
        }
      }, 1000);
      setIntervalId(interval);
    }
  }, [showModal]);

  return (
    <div className="game">
      <div className="game__container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              openCards={openCards}
              setOpenCards={setOpenCards}
              setMoves={setMoves}
              removedCards={removedCards}
              setRemovedCards={setRemovedCards}
              intervalId={intervalId}
              setIntervalId={setIntervalId}
              setCount={setCount}
              showModal={showModal}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
