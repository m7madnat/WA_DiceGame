import React from 'react';

const Dice = ({isPlay,isPlay2, dice, dice2 }) => {       
    return (            
        <div>        
            {isPlay && (                
            <img
                src={`./images/dice-${dice.number}.png`}
                alt="Playing dice"
                className="dice"/>
            )}
            {isPlay2 && (
            <img
            src={`./images2/dice-${dice2.number}.png`}
            alt="Playing dice"
            className="dice2"/>
            )}
            </div>    
    )
};

export default Dice;












