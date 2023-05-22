import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Cards";
import Footer from './Footer';

import { useNavigate } from "react-router-dom";

import instance from '../Request'

function AfterLogin() {

  const [childs, setChilds] = useState([])
  const [error, setError] = useState()
  const [user, setUser] = useState()

  const navigate = useNavigate()

  const apiCall = async () => {
    if(!user) {
      return
    }
    try {
      let result = await instance.request({
        url:'child/',
        method: 'get',
        headers: {
          'Authorization': `Bearer ${user}`
        },
        data: {
        },
      })
  
      setChilds(result.data)

    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        setError(error.response.data.errors)
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }
  
  useEffect(() => {
    let x = localStorage.getItem('access')
    if(x=== null) {
      navigate('/login')
    }
    setUser(x)

  }, [])

  useEffect(() => {
    apiCall()
  }, [user])

  return (
    <>
      <Navbar />

      <div className="pt-28 flex justify-center items-start px-10">
        <h1 className="text-6xl my-auto font-bold">All Profiles</h1>
      </div>
      
      <div className="w-full flex flex-wrap mt-10 px-10 h-screen items-start justify-center md:justify-start">
        
        {
          childs.length > 0 ? childs.map((item, key) => {
            return (
              <Card key={key} child={item} />
            )
          }) :
          <h1 className="text-5xl h-screen my-auto mx-auto">No profiles found.</h1>
        }

        
      </div>
      
      <Footer />
    </>
  );
}

export default AfterLogin;
