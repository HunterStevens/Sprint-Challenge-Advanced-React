import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import WorldCupPlayers from './components/WorldCupPlayers';

function App() {
  const [cardInfo, setCardInfo] = useState(false);

  const toggleCard = event =>{
    event.preventDefault();
    console.log("Toggle Button Triggered");
    setCardInfo(!cardInfo);
    console.log(cardInfo);
  }


  return (
    <div className="App">
      <header className="App-header">
        <WorldCupPlayers toggleCard={toggleCard}/>
      </header>
    </div>
  );
}

export default App;
