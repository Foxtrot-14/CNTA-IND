import React from 'react';
import './App.css';
// import Register from './components/register/Register';
// import RegisterNRC from './components/register/RegisterNRC';
// import RegParent from './components/register/RegParent';
// import RegTeacher from './components/register/RegTeacher';
// import LoginLogic from './components/login/LoginLogic';
import Homepage from './components/homepage/Homepage';
// import NavBar from './components/homepage/NavBar'; 

const App = () => {
  return (
    <>
      <div className="App">
        {/* <LoginLogic /> */}
        {/* <Register /> */}
        {/* <RegisterNRC /> */}
        {/* <RegParent /> */}
        {/* <RegTeacher /> */}
        <Homepage />
        {/* <NavBar /> */}
      </div>
    </>
  );
}

export default App;