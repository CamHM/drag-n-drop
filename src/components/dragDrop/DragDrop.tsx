import React, { useState, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Board } from '../../activities/mat4/entities/option.entity';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  droppables: Board[];
  onChange?: (newOrder: Board[]) => void;
};

const DragDrop = ({ children, droppables, onChange }: Props) => {
  const [boards, setBoards] = useState<Board[]>(droppables);

  useEffect(() => {
    setBoards(droppables);
  }, [droppables]);

  useEffect(() => {
    if (onChange) {
      onChange(boards);
    }
  }, [boards, onChange]);

  const handleDragEnd = (result: DropResult) => {
    const { draggableId, source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination?.droppableId) return;

    let filter = true;

    setBoards(
      boards.map(board => {
        if (board.id === destination.droppableId && !board.isNotDroppable) {
          if (!board.hasOnlyChild || (board.hasOnlyChild && board.options.length === 0)) {
            board.options.push(draggableId);
          } else {
            filter = false;
          }
          return board;
        } else if (board.id === source.droppableId && !board.isNotDroppable) {
          if (filter) {
            board.options = board.options.filter(opt => opt !== draggableId);
          }
          return board;
        } else return board;
      }),
    );
  };

  return <DragDropContext onDragEnd={handleDragEnd}>{children}</DragDropContext>;
};

export default DragDrop;
