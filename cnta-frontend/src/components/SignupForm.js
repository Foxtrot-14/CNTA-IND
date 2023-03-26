import './SignupForm.css';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SignupForm(){
    return(
        <div className="signup-form">
            <h1>Welcome!</h1>
            <h3>We are glad to see you signing up with us</h3>
            <form>
                <input placeholder="Name" />
                <input placeholder="City" />
                <input placeholder="Phone Number" />
                <input placeholder="Password" />
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Choose what role suits you the best?</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="parent" control={<Radio />} label="Parents" />
                <FormControlLabel value="teachers" control={<Radio />} label="Teachers" />
                <FormControlLabel value="nrc" control={<Radio />} label="NRC" />
                </RadioGroup>
                </FormControl>
                <button>Sign Up</button>
                <button>Already have an account? Log In</button>
            </form>
        </div>
    )
}

export default SignupForm