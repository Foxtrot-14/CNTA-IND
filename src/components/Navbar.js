import "./Navbar.css";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from 'react-responsive'

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const [menuClicked, setMenuClicked] = useState(false)

  const [user, setUser] = useState(false)

  useEffect(() => {
    let x = localStorage.getItem('access')
    if(x!== null) {
      setUser(true)
    }
  }, [])

  const logoutUser = () => {
    localStorage.clear('access')
    localStorage.clear('refresh')

    setUser(false)
    navigate('/')
  }

  return (
    <nav className="fixed py-2 px-4 w-full z-50 top-0">

      <div className="bg-zinc-900/90 text-white md:items-center rounded-xl py-3 px-10 flex flex-col md:flex-row justify-between items-start">
        <div className="w-full flex">
          <h1 onClick={() => {navigate('/')}} className="text-xl">CNTA</h1>
          <div className="block ml-auto md:hidden">
            <MenuIcon onClick={() => setMenuClicked(!menuClicked)} />
          </div>
          
        </div>
        
        
        <div className="mx-auto">

          

          <ul className={`items-center flex-col md:flex-row ${isMobile ? menuClicked ? 'flex' : 'hidden' : 'flex'}`}>
            <li onClick={() => {navigate('/')}} className="my-2 md:my-0 ml-0 md:ml-5 bg-zinc-900 transition py-2 px-3 rounded-lg hover:bg-cyan-400 cursor-pointer">Home</li>
            <li onClick={() => {navigate('/about')}} className="my-2 md:my-0 ml-0 md:ml-5 bg-zinc-900 transition py-2 px-3 rounded-lg hover:bg-cyan-400 cursor-pointer">About</li>
            
            {
              user ?
              <li onClick={() => {navigate('/welcome')}} className="my-2 md:my-0 ml-0 md:ml-5 bg-zinc-900 transition py-2 px-3 rounded-lg hover:bg-cyan-400 cursor-pointer">Dashboard</li>
              
              :
              <li onClick={() => {navigate('/login')}} className="my-2 md:my-0 ml-0 md:ml-5 bg-zinc-900 transition py-2 px-3 rounded-lg hover:bg-cyan-400 cursor-pointer">Login</li>
              
            }
            {
              user ?
              <li onClick={() => {navigate('/addprofile')}} className="my-2 md:my-0 ml-0 md:ml-5 bg-zinc-900 transition py-2 px-3 rounded-lg hover:bg-cyan-400 cursor-pointer">Create</li>
              
              :
              null
              
            }

            {
              user ? 
              <li onClick={() => {logoutUser()}} className="my-2 md:my-0 ml-0 md:ml-5 bg-zinc-900 transition py-2 px-3 rounded-lg hover:bg-red-400 cursor-pointer">Logout</li>
              :
              <li onClick={() => {navigate('/signup')}} className="my-2 md:my-0 ml-0 md:ml-5 bg-zinc-900 transition py-2 px-3 rounded-lg hover:bg-cyan-400 cursor-pointer">Signup</li>
            }
            
            
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar

