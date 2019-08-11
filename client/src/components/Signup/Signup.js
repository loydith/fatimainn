import React from 'react';
function Signup() {
  return (
<div>
<h1 className='text-center'>Sign Up</h1>
<form className='mt-3' id='signup-form'>
  
  <div className='form-group'>
    <label for='username' id='usernameText'>Username</label>
    <input type='text' className='form-control' id='username' placeholder='Enter a username'/>
  </div>
  <div className='form-group'>
    <label for='pass' id='passText'>Password</label>
    <input type='password' className='form-control' id='pass' placeholder='Password'/>
  </div>
  <div className='form-group'>
    <label for='pass2' id='passText'>Confirm Password</label>
    <input type='password' className='form-control' id='pass2' placeholder='Confirm Password'/>
  </div>

  <div className='text-center'>
    <button type='submit' id='signup' value='login' className='btn btn-danger'>Submit</button>
  </div>
  <br/>
  <div className='row mt-4 mb-5 justify-content-center'>
      <div className='co-md-12' id='loginText'>
        Already have an account? <a href='/login'>Login</a> here.
      </div>
    </div>
</form>
</div>
  );
}

export default Signup;