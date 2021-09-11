import './App.css';
import logo from './Assets/logo.png';
import covid from './Assets/covid.png';
function App() {
  return (
    <div className='upper'>
      <img className='imageHolder' src={covid} alt='Covid Background' />
      <img className='mainLogo' src={logo} alt='Logo' />
      <div>
        <form>
          <label for='First Name' className='label1'>
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            placeholder='Pincode'
            className='input1'
          ></input>
          <br></br>
          <label for='Last Name' className='label2'>
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            placeholder='Pincode'
            className='input2'
          ></input>
          <label for='Pincode' className='label3'>
            Pincode
          </label>
          <input
            type='text'
            name='pincode'
            placeholder='Pincode'
            className='input3'
          ></input>
          <button className='button1'>Show Statistics</button>
          <button className='button2'>Reset Form</button>
        </form>
      </div>
    </div>
  );
}

export default App;
