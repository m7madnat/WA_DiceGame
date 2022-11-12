import React from 'react';

export const Player1 = ({activePlayer, isGameOver, currentScore, score1 }) => {
  return (
    <section
        className={`player player--0 ${activePlayer === 1 && !isGameOver ? 'player--active' : null}`}>
        <h2 className="name" id="name--0">
          Player 1
        </h2>
        <p className="score" id="score--0">
          {score1}
        </p>
        <h1 style={{color: "red"}}>
          {activePlayer === 1 && isGameOver ? 'The winner is Player1' : null}
          {activePlayer === 2 && isGameOver ? 'You Lost' : null}
        </h1>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {activePlayer === 1 ? currentScore : 0}
          </p>
        </div>
      </section>         
  )
}  
export const Player2 = ({activePlayer, isGameOver, currentScore, score2 }) => {
  return(
    <section
        className={`player player--1 ${activePlayer === 2 &&!isGameOver ? 'player--active': null}`}
        >
        <h2 className="name" id="name--1">
          Player 2
        </h2>
        <p className="score" id="score--1">
          {score2}
        </p>
        <h1 style={{color: "red"}}>
          {activePlayer === 2 && isGameOver ? 'The winner is Player2' : null }
          {activePlayer === 1 && isGameOver ? 'You Lost' : null}
        </h1>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            {activePlayer === 2 ? currentScore : 0}
          </p>
        </div>
        </section>
  )
}











