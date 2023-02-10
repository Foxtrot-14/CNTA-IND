import React, { useState } from 'react'
import Register from './Register';
import RegisterNRC from './RegisterNRC';
// import RegParent from './RegParent';
// import RegTeacher from './RegTeacher';

const RegisterLogic = () => {
    const [currentForm, setCurrentForm] = useState("Register");
    const toggleForm = (formName) => { setCurrentForm(formName); };
  return (
    <div>
      {currentForm === "Register" ? (<Register onFormSwitch={toggleForm} />) 
      : ( <RegisterNRC onFormSwitch={toggleForm} />)}
      {/* {currentForm === "RegisterNRC" ? (<RegisterNRC onFormSwitch={toggleForm} />) 
      : ( <Register onFormSwitch={toggleForm} />)}
      {currentForm === "RegParent" ? (<RegParent onFormSwitch={toggleForm} />) 
      : ( <Register onFormSwitch={toggleForm} />)}
      {currentForm === "RegTeacher" ? (<RegTeacher onFormSwitch={toggleForm} />) 
      : ( <Register onFormSwitch={toggleForm} />)} */}
    </div>
  )
}

export default RegisterLogic