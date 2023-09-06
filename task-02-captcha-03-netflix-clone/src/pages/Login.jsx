import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';

    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setCaptcha(captcha);
  };

  const reloadCaptcha = () => {
    generateCaptcha(); // Regenerate captcha when the reload symbol is clicked
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInput.toLowerCase() === captcha.toLowerCase()) {
      // Captcha verification successful
      // Your login logic here
      alert('Login successful!');
    } else {
      alert('Captcha verification failed. Please try again.');
    }
  };

  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>

            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='email'
                placeholder='Email'
                autoComplete='email'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              
              <div className='py-4 text-center text-white'>
          <div
            className='captcha-box'
            style={{
              background: 'linear-gradient(to right,#e80519,#343030)',
              width: '150px', // Set the fixed width of the captcha box
              padding: '5px',
              borderRadius: '5px',
              margin: '0 auto', // Center the captcha box horizontally
              display: 'inline-block',
            }}
          >
            <span>{captcha}</span>
          </div>
          <button
            type='button'
            className='ml-2 text-blue-500 cursor-pointer'
            onClick={reloadCaptcha}
          >
            &#x21bb;
          </button>
        </div>
              <div className='py-4'>
                <input
                  onChange={(e) => setUserInput(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='text'
                  placeholder='Enter Captcha'
                />
              </div>
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>New to Netflix?</span>{' '}
                <Link to='/signup'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;