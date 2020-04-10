import React, {useState} from 'react';
import './App.css';
import WorldCupPlayers from './components/WorldCupPlayers';
import {useToggleHook} from './hooks/useToggleHook';

function App() {
  const [cardInfo, setCardInfo] = useToggleHook(false);

  const toggleCard = event =>{
    event.preventDefault();
    console.log("Toggle Button Triggered");
    setCardInfo(!cardInfo);
    console.log(cardInfo);
  }


  return (
    <div className="App">
      <header className="App-header">
      <button onClick={toggleCard}>Magenta Mode</button>
        <WorldCupPlayers/>
      </header>
    </div>
  );
}

export default App;
