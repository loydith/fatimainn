import React from 'react';
export default class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: ''
    }
  }
  handleSignUp = (event) => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    if(this.state.password === this.state.password2) {
      console.log(user)
      this.props.handleSignup(user);
    } else {
      console.log('Error')
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target || event.srcElement;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <h1 className='text-center'>Sign Up</h1>
        <form className='mt-3' id='signup-form'>
          <div className='form-group'>
            <label htmlFor='username' id='usernameText'>Username</label>
            <input onChange={this.handleChange} type='text' className='form-control' id='username' name="username" placeholder='Enter a username' />
          </div>
          <div className='form-group'>
            <label htmlFor='pass' id='passText'>Password</label>
            <input onChange={this.handleChange} type='password' className='form-control' id='pass' name="password" placeholder='Password' />
          </div>
          <div className='form-group'>
            <label htmlFor='pass2' id='passText'>Confirm Password</label>
            <input onChange={this.handleChange} type='password' className='form-control' id='pass2' name="password2" placeholder='Confirm Password' />
          </div>
          <div className='text-center'>
            <button type='submit' id='signup' value='login' className='btn btn-danger' onClick={this.handleSignUp}>Submit</button>
          </div>
          <br />
          <div className='row mt-4 mb-5 justify-content-center'>
            <div className='co-md-12' id='loginText'>
              Already have an account? <a href='/login'>Login</a> here.
          </div>
          </div>
        </form>
      </div>
    );
  }
}