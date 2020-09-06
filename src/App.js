import React from 'react';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div style={{ marginTop: '2rem' }}>
        <div className='signup'>SIGN UP</div>
      </div>
      <div className='container'>
        <h3 style={{ fontWeight: '300', letterSpacing: '0.2rem' }}>
          Create your account
        </h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <FacebookLoginButton onClick={() => alert('Hello')}>
              <span>Sign Up with Facebook</span>
            </FacebookLoginButton>
          </div>
          <div>
            <GoogleLoginButton onClick={() => alert('Hello')}>
              <span>Sign Up with Facebook</span>
            </GoogleLoginButton>
          </div>
        </div>
        {/* <div className='google'>
          <i className='fa fa-google' aria-hidden='true'></i>
          <p>Sign up with Google</p>
        </div> */}
        <div
          style={{
            width: '100%',
            height: '15px',
            borderBottom: '1px solid gray',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              // marginTop: '2rem',
              // fontSize: '40px',
              backgroundColor: '#ffffff',
              padding: '0 10px',
            }}
          >
            or
          </span>
        </div>
        {/* <div class='separator'>Next section</div> */}
        <form>
          <div className='fullname'>
            <input
              className='form-control'
              type='text'
              id='firstName'
              placeholder='First Name'
            />
          </div>
          <div className='fullname'>
            <input
              className='form-control'
              type='text'
              id='lastName'
              placeholder='Last Name'
            />
          </div>
          <div className='email'>
            <input
              className='form-control'
              type='text'
              id='email'
              placeholder='Email Address'
            />
          </div>

          <div className='input-group '>
            <input
              type='text'
              className='form-control'
              placeholder='Password'
            />
            <div className='input-group-append'>
              <button className='btn' type='button'>
                <i className='far fa-eye'></i>
              </button>
            </div>
          </div>
          <p style={{ marginTop: '1rem' }}>
            By clicking our Sign Up, you agree to our{' '}
            <span style={{ color: 'lightBlue' }}>Terms of Use</span> and our{' '}
            <span style={{ color: 'lightBlue' }}>Privacy Policy</span>.
          </p>
          <br />
          <div className='btn btn-primary'>SIGN UP</div>
        </form>
      </div>
    </div>
  );
}

export default App;
