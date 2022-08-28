import React from "react";

const User = ({ user }) => {
  return (
    <>
      <li>
        <div className="leaderboards__item">
          <p className="leaderboards__name">{user.username}</p>
          <p className="leaderboards__score">{user.score}</p>
        </div>
      </li>
    </>
  );
};

export default User;
