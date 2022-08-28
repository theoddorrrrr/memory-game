import React, { useEffect, useState } from "react";
import "./card.scss";

import unknownImg from "../../assets/card.jpg";

const Card = ({
  card,
  setOpenCards,
  openCards,
  setMoves,
  removedCards,
  setRemovedCards,
  setIntervalId,
  intervalId,
  setCount,
  showModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMatch =
    openCards.length === 2
      ? openCards.every((item) => item === card.title)
      : false;

  const issRemoved = removedCards.some((item) => item === card.title);

  useEffect(() => {
    setTimeout(() => {
      if (isMatch) {
        setRemovedCards([...removedCards, ...openCards]);
        setOpenCards([]);
      }
    }, 500);
  }, [isMatch]);

  useEffect(() => {
    setTimeout(() => {
      if (openCards.length === 2) {
        setIsOpen(false);
        setOpenCards([]);
      }
    }, 500);
  }, [openCards]);

  const handleOpen = () => {
    if (!intervalId) {
      const interval = setInterval(() => {
        if (!showModal) {
          setCount((prev) => prev + 1);
        }
      }, 1000);
      setIntervalId(interval);
    }

    if (openCards.length < 2) {
      setIsOpen(true);
      setOpenCards([...openCards, card.title]);
      setMoves((prev) => (isOpen ? prev : prev + 1));
    }
  };

  return (
    <div
      className={
        issRemoved ? "card card_close" : isOpen ? "card card_flip" : "card"
      }
      onClick={handleOpen}
    >
      <div className="card-img">
        <img src={unknownImg} alt="card" />
      </div>
      <div className="card-img card-fliped">
        <img src={card.img} alt="card" />
      </div>
    </div>
  );
};

export default Card;
