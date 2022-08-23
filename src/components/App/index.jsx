import { useEffect, useState } from "react";
import Card from "../Card";
import "./App.scss";
import {data} from "../../data"

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

function App() {
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
    <div className="App">
      <div className="container">
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

export default App;
