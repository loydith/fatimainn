import React from 'react';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLogin = (event) => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    this.setState({username: '', password: ''});

    console.log(user)
    this.props.handleLogin(user);
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
        <h1 className='text-center'>Login</h1>
        <form className='mt-3' id='login-form'>
          <div className='form-group'>
            <label htmlFor='username' id='usernameText'>Username</label>
            <input onChange={this.handleChange} type='text' className='form-control' id='username' name="username" value={this.state.username} placeholder='Enter username' />
          </div>
          <div className='form-group'>
            <label htmlFor='pass' id='passText'>Password</label>
            <input  onChange={this.handleChange}  type='password' className='form-control' id='pass' name="password" value={this.state.password} placeholder='Password' />
          </div>
          <div className='text-center'>
            <button type='submit' id='login' className='btn btn-danger' onClick={this.handleLogin}>Submit</button>
          </div>
          <br />
          <div className='row mt-4 justify-content-center'>
            <div className='co-md-12' id='loginText'>
              Don't have an account yet? <a href='/signup'>Sign Up</a> here.
          </div>
          </div>
        </form>
      </div>
    );
  }
}