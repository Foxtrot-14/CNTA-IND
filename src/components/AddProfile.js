import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProfile.css";

import Navbar from './Navbar'
import Footer from "./Footer";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import instance from '../Request'

function AddProfile() {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(0);
  const [city, setCity] = useState("");
  const [guardian, setGuardian] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [muac, setMuac] = useState("");
  const [cc, setCC] = useState("");
  const [whr, setWhr] = useState("");
  const [mw, setMw] = useState(false);
  const [stunting, setStunting] = useState("");
  const [fd, setFd] = useState(false);
  const [hc, setHc] = useState("");
  // const [photo, setPhoto] = useState("");

  const [error, setError] = useState()
  const [user, setUser] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let result = await instance.request({
        url:'child/',
        method: 'post',
        headers: {
          'Authorization': `Bearer ${user}`
        },
        data: {
          'name':name,
          'age':parseFloat(age),
          'gender': gender,
          'f_name': guardian,
          'height': parseFloat(height),
          'weight': parseFloat(weight),
          'bmi': parseFloat(bmi),
          'muac': parseFloat(muac),
          'chestc': parseFloat(cc),
          'headc': parseFloat(hc),
          'msclwstng': (mw),
          'fngr_dete': fd,
          'city':city
        },
      })
      console.log(result)
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
  };

  useEffect(() => {
    let x = localStorage.getItem('access')
    if(x===null) {
      navigate('/login')
    }
    setUser(x)
  }, [])

  useEffect(() => {
    let x = height/100
    let y = weight/(x*x)
    setBmi(parseFloat(y).toFixed(3))
  }, [height, weight])

  return (
    <>
    <Navbar />
      <div className="add pt-10" onSubmit={handleSubmit}>
        <h1 className="text-6xl font-bold">Add child Profile</h1>
        <form>
          <p className="text-left text-xl">Name:</p>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-left text-xl">Age:</p>
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {/* <input type="file" placeholder="Photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])}/> */}

          <p className="text-left text-xl">City:</p>
          <input
            placeholder="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <p className="text-left text-xl">Parent Name:</p>
          <input
            placeholder="Name of Parent"
            type="text"
            value={guardian}
            onChange={(e) => setGuardian(e.target.value)}
          />

          <p className="text-left text-xl">Height:</p>
          <input
            placeholder="Height (in cms)"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <p className="text-left text-xl">Weight:</p>
          <input
            placeholder="Weight (in KG)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <p className="text-left text-xl">BMI:</p>
          <input
            placeholder="BMI"
            type="number"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
          />

          <p className="text-left text-xl">Mid-Upper Arm Circumference:</p>
          <input
            placeholder="Mid-Upper Arm Circumference"
            type="number"
            value={muac}
            onChange={(e) => setMuac(e.target.value)}
          />

          <p className="text-left text-xl">Chest Circumference:</p>
          <input
            placeholder="Chest Circumference"
            type="number"
            value={cc}
            onChange={(e) => setCC(e.target.value)}
          />

          <p className="text-left text-xl">Head Circumference:</p>
          <input
            placeholder="Head Circumference"
            type="number"
            value={hc}
            onChange={(e) => setHc(e.target.value)}
          />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              className="justify-center"
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={gender}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel 
                value={1} 
                control={<Radio />} 
                label="Female" 
              />
            </RadioGroup>
          </FormControl>



          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Muscle Wasting
            </FormLabel>
            <RadioGroup
              row
              className="justify-center"
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={mw}
              onChange={(e) => {
                setMw(e.target.value)
              }}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="True"
              />
              <FormControlLabel 
                value={false} 
                control={<Radio />} 
                label="False" 
              />
            </RadioGroup>
          </FormControl>
          
          
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
             Finger Deterioration
            </FormLabel>
            <RadioGroup
              row
              className="justify-center"
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={fd}
              onChange={(e) => {
                setFd(e.target.value)
              }}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="True"
              />
              <FormControlLabel 
                value={false} 
                control={<Radio />} 
                label="False" 
              />
            </RadioGroup>
          </FormControl>

          <button className="mt-5 hover:bg-cyan-500">Upload</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddProfile;
