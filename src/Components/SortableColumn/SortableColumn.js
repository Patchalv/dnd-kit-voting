import React from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { /*arrayMove,*/ SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
//import { useState } from 'react';
import { SortableItem } from '../SortableItem/SortableItem';
//import { initialGames } from '../../data';
import Col from 'react-bootstrap/Col';
import './SortableColumn.css';




function SortableColumn({playerName, state, onDragEnd}) {
    /*const [games, setGames] = useState(initialGames);

    function handleDragEnd(event) {
      const {active, over} = event;
      
      if (active.id !== over.id) {
        setGames((items) => {
          const activeIndex = items.indexOf(active.id);
          const overIndex = items.indexOf(over.id);
  
          return arrayMove(items, activeIndex, overIndex);
        })
      }
    }*/

    const calcPoints = (item, array) => {
      const currentIndex = array.indexOf(item);
      const arrayLength = array.length;
      const pointsValue = arrayLength - currentIndex;
      return pointsValue;
    }
  
    return (
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <Col className="playerCol">
            <h4>{playerName}</h4>
            <SortableContext
              items={state}
              strategy={verticalListSortingStrategy}
            >
    
              {state.map(game => <SortableItem key={game} id={game} index={state.indexOf(game)} points={calcPoints(game,state)}/>)}
            </SortableContext>
          </Col>
        </DndContext>
    );
  
};

export default SortableColumn;