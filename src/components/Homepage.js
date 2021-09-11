import React from 'react';
import covid from '../Assets/covid.png';
import logo from '../Assets/logo.png';
import '../App.css';

function Homepage() {
  function handleSubmit(e) {
    e.preventDefault();
    // Check for valid values
    // and navigate to /find and show that page

    console.log('You have Submitted Already.');
  }
  function handleReset(e) {
    e.preventDefault();

    console.log('Successfully called');
  }
  return (
    <div>
      <img className='imageHolder' src={covid} alt='Covid Background' />
      <div class='top-left'>
        <span>Vaccine Tracker</span>
      </div>
      <div class='top-left-below'>
        <p>
          Find all the important information and all the things related to Covid
          Virus and Vaccine Here
        </p>
      </div>
      <img className='mainLogo' src={logo} alt='Logo' />
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='First Name' className='label1'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            placeholder='Pincode'
            className='input1'
          ></input>
          <br></br>
          <label htmlFor='Last Name' className='label2'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            placeholder='Pincode'
            className='input2'
          ></input>
          <label htmlFor='Pincode' className='label3'>
            Pincode
          </label>
          <input
            type='text'
            name='pincode'
            placeholder='Pincode'
            className='input3'
          ></input>
          <button type='Submit' className='button1'>
            Show Statistics
          </button>
          <button className='button2' onClick={handleReset}>
            Reset Form
          </button>
        </form>
      </div>
    </div>
  );
}
export default Homepage;
