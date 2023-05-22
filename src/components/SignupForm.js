import "./SignupForm.css";
import * as React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import instance from '../Request'

import { useMediaQuery } from 'react-responsive'

function SignupForm() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState(1)
  const [error, setError] = useState()
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  useEffect(() => {
    let x = localStorage.getItem('access')
    if(x!== null) {
      navigate('/welcome')
    }
  }, [])

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      let result = await instance.request({
        url:'register/',
        method: 'post',
        data: {
          'name':name,
          'city':city,
          'phone':number,
          'password':password,
          'password2':password,
          'type':type,
        },
      })
  
      console.log(result.data)

      localStorage.setItem('access', result.data.token.access)
      localStorage.setItem('refresh', result.data.token.refresh)

      navigate('/')

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

  return (
    <div className="signup-form">
      <h1>Welcome!</h1>
      <h3>We are glad to see you signing up with us</h3>
      {
        error && (
        <>
          <h4 className="text-red-500">Fix the following errors:</h4>
          <ul>
            {
              Object.keys(error).map((item, key) => {
                if(item==='password2') {
                  return
                }
                return (
                  <li className="text-red-500" key={key}>{item} must not be empty</li>
                )
              })
            }
            
          </ul>
        </>
        )
      }
      

      <form onSubmit={(e) => {handleClick(e)}}>
        <input required onChange={(e) => {setName(e.target.value)}} placeholder="Name" />
        <input required onChange={(e) => {setCity(e.target.value)}} placeholder="City" />
        <input type="number" required onChange={(e) => {setNumber(e.target.value)}} placeholder="Phone Number" />
        <input type="password" required onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Choose what role suits you the best?
          </FormLabel>
          <RadioGroup
            
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={type}
            onChange={(e) => {
              setType(e.target.value)
            }}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Parents"
            />
            <FormControlLabel 
              value={3} 
              control={<Radio />} 
              label="NRC" 
            />
          </RadioGroup>
        </FormControl>
        <button className="bg-black" type="submit">Sign Up</button>
        <button onClick={() => {
          navigate('/login')
        }}>{isMobile ? 'Log In' : 'Already have an account? Log In'}</button>
      </form>
    </div>
  );
}

export default SignupForm;
