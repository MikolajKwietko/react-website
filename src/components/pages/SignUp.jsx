import React from 'react';
import '../../App.css';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import PasswordStr from "../PasswordStr";
import '../SignUp.css';

export default function SignUp() {
  var score=0;
  return(
  <div className="sign-up">
    <div className='loginBox'>
      <h1>Sign Up</h1>
      <br />
      <form>
        <TextField id='username'  label="username" margin='normal'/>
        <br />
        <TextField id='email' label="e-mail" margin='normal'/>
        <br />
        <TextField id='password' label="password" margin='normal'/>
        <br />
        <div className='pwStrRow'>
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <Button 
              className="pwShowHideBtn"
              label="Show"
              style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}}
              />
            </div>
          )}
        </div>
        <TextField name="pwconfirm" label="confirm password" margin='normal'/>
        <br />
        <Button
          variant='contained'
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit">
            SUBMIT
        </Button>
      </form>
      <p>
          Already have an account? <br />
          <a href="/">Log in here</a>
      </p>
    </div>
  </div>
  );
}

