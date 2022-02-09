import { useState } from 'react';
import './App.css';


function App() {

  setInterval(updateTime, 1000)

  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now)

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div className="App">
      <h1>Time</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default App;
