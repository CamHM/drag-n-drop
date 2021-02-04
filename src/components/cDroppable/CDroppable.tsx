import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import CSS from 'csstype';

type Props = {
  id: string;
  children?: React.ReactNode | React.ReactNode[];
  hint?: React.ReactNode;
  showBackground?: boolean;
};

const CDroppable = ({ id, children, hint, showBackground = true }: Props) => {
  const containerStyles: CSS.Properties = {
    position: 'relative',
  };

  const hintStyles: CSS.Properties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    zIndex: -5,
  };

  return (
    <div style={containerStyles}>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver && showBackground ? '#99d3db80' : '',
              border: 'none',
            }}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div style={hintStyles}>{hint}</div>
    </div>
  );
};

export default CDroppable;

type DraggableProps = {
  id: string;
  index: number;
  child: React.ReactNode;
};

export const CDraggable = ({ id, index, child }: DraggableProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {child}
        </div>
      )}
    </Draggable>
  );
};
