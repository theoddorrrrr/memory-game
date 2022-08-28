import React, { useState } from "react";
import Leaderboards from "../../components/Leaderboards";

const LeaderboardsPage = () => {
  const [gamemode, setGamemode] = useState("hard");

  return (
    <Leaderboards gamemode={gamemode} setGamemode={setGamemode} />
  );
};

export default LeaderboardsPage;
