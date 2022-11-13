import Button from './Button';
import Dice from './Dice';
import {Player1} from './Player';
import {Player2} from './Player';
function Board({
    isPlay,
    isPlay2,
    activePlayer,
    isGameOver,
    currentScore,
    score1,
    score2,
    dice,
    dice2,
    rollDice,
    holdGame,
    resetGame}
){
    return (    
        <main>
          <Player1 activePlayer={activePlayer} isGameOver={isGameOver} currentScore={currentScore} score1={score1}/>
          <Player2 activePlayer={activePlayer} isGameOver={isGameOver} currentScore={currentScore} score2={score2}/>     
          <Dice isPlay={isPlay} isPlay2={isPlay2} dice={dice} dice2={dice2}/>         
          <Button text="New game" className="btn btn--new" onClick={resetGame} />
          <Button text="Roll dice" className="btn btn--roll" onClick={rollDice} />
          <Button text="Hold" className="btn btn--hold" onClick={holdGame}/>               
        </main>
      );
}

export default Board;