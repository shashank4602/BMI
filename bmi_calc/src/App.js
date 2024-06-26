import { useState } from 'react';
import './index.css';

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let reload = () => {
    window.location.reload();
  }

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight <= 0 || height <= 0) {
      alert("Please enter valid values");
    }
    else {
      let bmi = (weight / (height * height));
      console.log(bmi);
      setBmi(bmi);

      if (bmi < 25) {
        setMessage("You are underweight");
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage("You are healthy");
      }
      else setMessage("You are overweight");
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(in kg)</label>
            <input
              type="text"
              placeholder='Enter your weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in m)</label>
            <input
              type="text"
              placeholder='Enter your height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
