import React, { useState, useEffect } from 'react';
import Board from './components/Board';

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [isPlay2, setIsPlay2] = useState(false);
  const [activePlayer, setActivePlayer] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [dice, setDice] = useState({ number: 0 });
  const [dice2, setDice2] = useState({ number: 0 });
  // start game
  const rollDice = () => {
    if (!isGameOver) {
      setIsPlay(true);    
      setIsPlay2(true);    
      setDice({ number: Math.floor(Math.random() * 6) + 1 }); 
      setDice2({ number: Math.floor(Math.random() * 6) + 1}); 
    }    
  };

  useEffect(() => {
    if (dice.number !== 1 || dice2.number !== 1) {
      const newScore =  dice.number + dice2.number;
      setCurrentScore((currentScore) => currentScore + newScore);      
    }  
    if(dice.number === 6 && dice2.number === 6 ) {      
      activePlayer === 1 ? setActivePlayer(2) : setActivePlayer(1);
      setIsGameOver(true)
    }      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dice.number, dice2.number]);

  useEffect(() => {
    if(currentScore >= 100)
    {
      setIsGameOver(true)
    }  
  },[currentScore]
  );
  
  const holdGame = () => {
    if (!isGameOver) {
      if (activePlayer === 1) {
        if (score1 + currentScore < 100) {
          setScore1((prevScore) => prevScore + currentScore);
          setCurrentScore(0);
          setActivePlayer(2);
        } else {
          setIsPlay(false);
          setIsPlay2(false);
          setIsGameOver(true);
          setScore1(score1 + currentScore);
        }
      } else {
        if (score2 + currentScore < 100) {
          setScore2((prevScore) => prevScore + currentScore);
          setCurrentScore(0);
          setActivePlayer(1);
        } else {
          setIsPlay(false);
          setIsPlay2(false);
          setIsGameOver(true);
          setScore2(score2 + currentScore);
        }
      }
    }
  };
  // reset game
  const resetGame = () => {
    window.location.reload();
  };
  return(
    <div>
  <Board 
    isPlay={isPlay}
    isPlay2={isPlay2}
    activePlayer={activePlayer}
    isGameOver={isGameOver}
    currentScore={currentScore}
    score1={score1}
    score2={score2}
    dice={dice}
    dice2={dice2}
    rollDice={rollDice}
    holdGame={holdGame}
    resetGame={resetGame}   
  />
  </div>
  )
}

export default App;
