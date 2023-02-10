import React, {useState} from "react";
import Login from "./Login";
import Register from "../register/Register";

const LoginLogic = () => {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default LoginLogic;
