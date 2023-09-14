import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useNotFound = (message: string) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(`${message} Not Found`);
  }, []);

  return { handleClick };
};
