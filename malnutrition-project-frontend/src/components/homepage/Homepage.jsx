import React from 'react'
import NavBar from './NavBar'
import mal from './assests/mal3.jpg'
import './Homepage.css'
// import About from './About'
// import Contact from './Contact'

const Homepage = () => {
  return (
    <>
      <NavBar />
      <div className='banner'>
        <img src={mal} alt="" />
      </div>
    </>
  )
}

export default Homepage
