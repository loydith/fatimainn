import React from 'react';
function Login() {
  return (
<div>
<h1 className='text-center'>Login</h1>

<form className='mt-3' id='login-form'>
  
  <div className='form-group'>
    <label for='username' id='usernameText'>Username</label>
    <input type='text' className='form-control' id='username' placeholder='Enter username'/>
  </div>
  <div className='form-group'>
    <label for='pass' id='passText'>Password</label>
    <input type='password' className='form-control' id='pass' placeholder='Password'/>
  </div>
  
  <div className='text-center'>
    <button type='submit' id='login' className='btn btn-danger'>Submit</button>
  </div>
  <br/>
  <div className='row mt-4 justify-content-center'>
      <div className='co-md-12' id='loginText'>
        Don't have an account yet? <a href='/signup'>Sign Up</a> here.
      </div>
    </div>
</form>
</div>
  );
}

export default Login;