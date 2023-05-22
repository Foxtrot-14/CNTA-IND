import "./LoginForm.css";
import instance from '../Request'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

function LoginForm() {
  const navigate = useNavigate()

  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  useEffect(() => {
    let x = localStorage.getItem('access')
    if(x!== null) {
      navigate('/welcome')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let result = await instance.request({
        url:'login/',
        method: 'post',
        data: {
          'phone':number,
          'password':password
        },
      })

      localStorage.setItem('access', result.data.token.access)
      localStorage.setItem('refresh', result.data.token.refresh)

      navigate('/welcome')

    } catch(error) {
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

  return (
    <div className="login-form">
      <h1>Welcome!</h1>
      <h3>We hope you are having a good day</h3>

      {
        error && (
        <>
          <h4 className="text-red-500">Fix the following errors:</h4>
          <ul>
            {
              Object.values(error).map((item, key) => {
                return (
                  <li className="text-red-500" key={key}>{item} must not be empty</li>
                )
              })
            }
            
          </ul>
        </>
        )
      }
      
      <form onSubmit={handleSubmit}>
        <input type="number" required onChange={(e) => {setNumber(e.target.value)}} placeholder="Phone Number" />
        <input type="password" required onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
        
        <button id="form-btn">Log In</button>

        <button onClick={() => {navigate('/signup')}}>{isMobile ? "Sign Up" : "Don't have an account? Sign Up" }</button>
      </form>
    </div>
  );
}

export default LoginForm;
