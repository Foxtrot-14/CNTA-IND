import React from 'react'

const RegisterNRC = (props) => {
  return (
    <div id="reg-nrc">
      <form className="reg-form-nrc">
          <label htmlFor="name">Name</label>
          <input value="" type="name" placeholder="Your Organisation's Name" id="name" name="name"/>
          <label htmlFor="email">Email</label>
          <input value="" type="email" placeholder="Organisation's Email" id="email" name="email"/>
          <label htmlFor="phone">Phone Number</label>
          <input value="" type="phone" placeholder="Organisation's Phone Number" id="phone" name="phone"/>
          <label htmlFor="city">City</label>
          <input value="" type="city" placeholder="Registered City" id="city" name="city"/>
          <label htmlFor="location">Location</label>
          <input value="" type="location" placeholder="Location of Center" id="location" name="location"/>
          <label htmlFor="password">Password</label>
          <input value="" type="password" placeholder="*******" id="password" name="password"/>
          <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterNRC
