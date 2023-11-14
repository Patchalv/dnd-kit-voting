import React from 'react';
import './TotalScore.css';

function TotalScore({state1, state2, state3, state4}) {

  const calcPoints = (item, array) => {
    const currentIndex = array.indexOf(item);
    const arrayLength = array.length;
    const pointsValue = arrayLength - currentIndex;
    return pointsValue;
  }


  return (
    <div className='totalScore'> 
        <h4>Total Score:</h4>
        <ul>
            {state1.map(game => <li key={game}>{game}: {calcPoints(game, state1)}</li>)}
        </ul>
    </div>
  )
}

export default TotalScore