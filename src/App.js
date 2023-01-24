import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState()

useEffect(() => {

  axios.get('http://localhost:5000/api').then(response => {
    setData(response.data)
    console.log(response.data)
    
  }).catch(err => {
    console.log(err)
  })

}, [])
console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4>{data ? data.age : 'loading ...'}</h4>
      </header>
    </div>
  );
}

export default App;
