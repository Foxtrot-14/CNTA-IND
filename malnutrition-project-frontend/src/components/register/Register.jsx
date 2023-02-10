import React, { useState } from 'react'

const Register = (props) => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <section id="register">
      <div className="auth-form-container">
        <h1>Want to Register Yourself?</h1>
        <h3>Pick what suits your role the best</h3>

        <a href='#reg-teacher' onClick={() => setActiveNav('#reg-teacher')} className={activeNav === '#reg-teacher' ? 'active' : ''}>Sign Up for Teachers</a>
        <a href='#reg-parent'>Sign Up for Parents</a>
        <a href='#reg-nrc'>Sign Up for Nutrition Rehabilitation Centre</a>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here</button>
      </div>
    </section>
  )
}

export default Register
