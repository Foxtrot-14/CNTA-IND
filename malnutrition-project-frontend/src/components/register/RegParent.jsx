import React from 'react'

const RegParent = (props) => {
  return (
    <div id="reg-parent">
      <form className="reg-form-parent" >
          <label htmlFor="name">Name</label>
          <input value="" type="name" placeholder="Your Name" id="name" name="name"/>
          <label htmlFor="email">Email</label>
          <input value="" type="email" placeholder="Your Email" id="email" name="email"/>
          <label htmlFor="phone">Phone Number</label>
          <input value="" type="phone" placeholder="Your Phone Number" id="phone" name="phone"/>
          <label htmlFor="city">City</label>
          <input value="" type="city" placeholder="Your City" id="city" name="city"/>
          <label htmlFor="location">Location</label>
          <input value="" type="location" placeholder="Location" id="location" name="location"/>
          <label htmlFor="password">Password</label>
          <input value="" type="password" placeholder="*******" id="password" name="password"/>
          <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default RegParent
