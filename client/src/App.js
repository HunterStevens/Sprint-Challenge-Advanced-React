import React from 'react';
import './App.scss';
import WorldCupPlayers from './components/WorldCupPlayers';
import {useToggleHook} from './hooks/useToggleHook';
import ButtonToggle from './components/ButtonToggle'

function App() {
  // const [cardInfo, setCardInfo] = useToggleHook(false);

  // const toggleCard = () =>{
  //   console.log("Toggle Button Triggered");
  //   setCardInfo(!cardInfo);
  //   console.log(cardInfo);
  // }


  return (
    <div className="App">
      <header className="App-header">
      <ButtonToggle/>
        <WorldCupPlayers/>
      </header>
    </div>
  );
}

export default App;
