import React, { useState } from "react";
import Leaderboards from "../../components/Leaderboards";
import {useAuth} from "../../hooks"

const LeaderboardsPage = () => {
  const {gamemode: currentGamemode} = useAuth()
  const [gamemode, setGamemode] = useState(currentGamemode ? currentGamemode : "easy");

  return (
    <Leaderboards gamemode={gamemode} setGamemode={setGamemode} />
  );
};

export default LeaderboardsPage;
