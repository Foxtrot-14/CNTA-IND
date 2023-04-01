import React, { useState } from "react";
import "./AddProfile.css";
import Footer from "./Footer";

function AddProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [guardian, setGuardian] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [muac, setMuac] = useState("");
  const [cc, setCC] = useState("");
  const [whr, setWhr] = useState("");
  const [mw, setMw] = useState("");
  const [stunting, setStunting] = useState("");
  const [fd, setFd] = useState("");
  const [hc, setHc] = useState("");
  // const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add" onSubmit={handleSubmit}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <form>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {/* <input type="file" placeholder="Photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])}/> */}
          <input
            placeholder="Gender"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            placeholder="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            placeholder="Name of Parents/Guardian"
            type="text"
            value={guardian}
            onChange={(e) => setGuardian(e.target.value)}
          />
          <input
            placeholder="Height (in cms)"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            placeholder="Weight (in KG)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            placeholder="BMI"
            type="number"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
          />
          <input
            placeholder="Mid-Upper Arm Circumference"
            type="number"
            value={muac}
            onChange={(e) => setMuac(e.target.value)}
          />
          <input
            placeholder="Chest Circumference"
            type="number"
            value={cc}
            onChange={(e) => setCC(e.target.value)}
          />
          <input
            placeholder="Head Circumference"
            type="number"
            value={hc}
            onChange={(e) => setHc(e.target.value)}
          />
          <input
            placeholder="Waist-to-Hip Ratio"
            type="number"
            value={whr}
            onChange={(e) => setWhr(e.target.value)}
          />
          <input
            placeholder="Muscle Wasting"
            type="number"
            value={mw}
            onChange={(e) => setMw(e.target.value)}
          />
          <input
            placeholder="Stunting"
            type="number"
            value={stunting}
            onChange={(e) => setStunting(e.target.value)}
          />
          <input
            placeholder="Fingerprint Deterioration"
            type="number"
            value={fd}
            onChange={(e) => setFd(e.target.value)}
          />
          <input placeholder="Message" rows="4" />
          <textarea />
          <button>Upload</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddProfile;
