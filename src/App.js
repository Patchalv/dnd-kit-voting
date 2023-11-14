import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SortableColumn from './Components/SortableColumn/SortableColumn';
import TotalScore from './Components/TotalScore/TotalScore';
import { Container, Row } from 'react-bootstrap';
import { initialGames } from './data';
import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

function App() {
  const [player1Games, setPlayer1Games] = useState(initialGames);
  const [player2Games, setPlayer2Games] = useState(initialGames);
  const [player3Games, setPlayer3Games] = useState(initialGames);
  const [player4Games, setPlayer4Games] = useState(initialGames);

  function handleDragEnd1(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setPlayer1Games((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      })
    }
  }

  function handleDragEnd2(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setPlayer2Games((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      })
    }
  }

  function handleDragEnd3(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setPlayer3Games((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      })
    }
  }

  function handleDragEnd4(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setPlayer4Games((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
      
    }
  }

  return (
    <div className="App">
      
      <Container>
      <h1>Vote for a Game</h1>
      <p>Each player should drag and drop the games in the order of how much they would like to play the game. The top game is the one they most want to play, and the lowest is their least favourite.</p>
        <Row>
          <SortableColumn playerName="Player 1" state={player1Games} onDragEnd={handleDragEnd1} />
          <SortableColumn playerName="Player 2" state={player2Games} onDragEnd={handleDragEnd2} />
          <SortableColumn playerName="Player 3" state={player3Games} onDragEnd={handleDragEnd3} />
          <SortableColumn playerName="Player 4" state={player4Games} onDragEnd={handleDragEnd4} />
        </Row>
        <TotalScore state1={player1Games} state2={player2Games} state3={player3Games} state4={player4Games}/>
      </Container>
      
    </div>
  );
}

export default App;
