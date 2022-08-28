import React, { useEffect, useState } from "react";
import Game from "../../components/Game";
import Header from "../../components/Header";
import { useAuth } from "../../hooks";
import { getCards } from "../../data";
import Menu from "../../components/Menu";
import Results from "../../components/Results";

const GamePage = () => {
  const { username, gamemode } = useAuth();

  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [moves, setMoves] = useState(0);
  const [data, setData] = useState(() => getCards());

  useEffect(() => {
    if (isResult) {
      clearInterval(intervalId);

      const currUser = {
        username: username,
        gamemode: gamemode,
        moves: moves,
        time: count,
        score: moves * count,
      };

      const users = JSON.parse(localStorage.getItem("leaderboards")) || [];
      const selectedUser = users.find(
        (item) => item.username === username && item.gamemode === gamemode
      );
      if (!selectedUser) {
        users.push(currUser);
      }
      if (selectedUser) {
        users.forEach((item) => {
          if (item.score > currUser.score) {
            item.moves = currUser.moves;
            item.time = currUser.time;
            item.score = currUser.score;
          }
        });
      }
      localStorage.setItem("leaderboards", JSON.stringify(users));
    }
  }, [isResult]);

  return (
    <>
      <Header
        count={count}
        username={username}
        moves={moves}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Game
        count={count}
        setCount={setCount}
        moves={moves}
        setMoves={setMoves}
        cards={data}
        intervalId={intervalId}
        setIntervalId={setIntervalId}
        showModal={showModal}
        setIsResult={setIsResult}
      />
      <Menu showModal={showModal} setShowModal={setShowModal} />
      <Results isResult={isResult} moves={moves} time={count} />
    </>
  );
};

export default GamePage;
