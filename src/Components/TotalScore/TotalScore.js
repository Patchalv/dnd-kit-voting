import React from 'react';
import { initialGames } from '../../data';

function TotalScore() {
  return (
    <div>
        <h4>Total Score:</h4>
        <ul>
            {initialGames.map(game => <li key={game}>{game}:</li>)}
        </ul>
    </div>
  )
}

export default TotalScore