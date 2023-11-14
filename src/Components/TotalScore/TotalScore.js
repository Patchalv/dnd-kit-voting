import React from 'react';
import { initialGames } from '../../data';
import './TotalScore.css';

function TotalScore() {
  return (
    <div className='totalScore'> 
        <h4>Total Score:</h4>
        <ul>
            {initialGames.map(game => <li key={game}>{game}:</li>)}
        </ul>
    </div>
  )
}

export default TotalScore