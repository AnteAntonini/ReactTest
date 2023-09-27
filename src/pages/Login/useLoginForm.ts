import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const useLoginForm = (message: string) => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const [errorMessages, setErrorMessages] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const registerUsers = [
    {
      email: "user1@gmail.com",
      password: "1234",
    },
    {
      email: "user2@gmail.com",
      password: "1234",
    },
  ];

  const errorMessage =
    "The email address or password is incorrect. Please try again.";

  useEffect(() => {
    console.log(`${message} LoginForm`);
  }, []);

  const handleChange = ({ target }: any) => {
    setUser((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const userData = registerUsers.find(
      (registerUser) => registerUser.email === user.email
    );

    if (userData) {
      if (userData.password !== user.password) {
        setErrorMessages(errorMessage);
      } else {
        sessionStorage.setItem("isLoggedIn", "true");
        setIsAuth(true);
        navigate("/app");
      }
    } else {
      setErrorMessages(errorMessage);
    }
  };

  return {
    handleLogin,
    handleChange,
    errorMessages,
  };
};
