import React, { useState } from 'react'
import "./App.css"
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';


function App() {
  const [isGameStarted, setGamestarted] = useState(true);

  const toggleGamePlay = () => {
    setGamestarted((prev) => !prev)
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame toggleGamePlay={toggleGamePlay} />
    }
    </>
  )
}

export default App
