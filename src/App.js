import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SortableColumn from './Components/SortableColumn/SortableColumn';
import TotalScore from './Components/TotalScore/TotalScore';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      
      <Container>
      <h1>Vote for a Game</h1>
      <p>Each player should drag and drop the games in the order of how much they would like to play the game. The top game is the one they most want to play, and the lowest is their least favourite.</p>
        <Row>
          <SortableColumn playerName="Player 1" />
          <SortableColumn playerName="Player 2" />
          <SortableColumn playerName="Player 3" />
          <SortableColumn playerName="Player 4" />
        </Row>
        <TotalScore />
      </Container>
      
    </div>
  );
}

export default App;
