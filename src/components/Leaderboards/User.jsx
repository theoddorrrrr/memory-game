import React from "react";

const User = ({ user, select }) => {
  return (
    <>
      <li>
        <div className="leaderboards__item">
          <p className="leaderboards__name">{user.username}</p>
          <p className="leaderboards__score">{user[select]}</p>
        </div>
      </li>
    </>
  );
};

export default User;
