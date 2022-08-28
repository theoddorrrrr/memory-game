import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const { username, gamemode } = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : 0;
  if (!username) navigate("/");

  return {username, gamemode};
};

