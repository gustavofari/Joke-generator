import React, { useEffect, useState }  from "react";
import './index.css';

const API_URL = `http://api.icndb.com/jokes/random`;

function App() {

    const [joke, setJoke] = useState('');

    const generateJoke = () => {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
    }

    useEffect(() => {
      generateJoke();
    }, [])

    return (
      <div className="box">
         <h1>Jokes Generator</h1>
         <p>{joke}</p>
         <button onClick={generateJoke}>Get new joke 😂</button>
      </div>
    );
  }


export default App;