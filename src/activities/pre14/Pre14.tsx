import { useState } from 'react';
import DragDrop from '../../components/dragDrop/DragDrop';
import CDroppable, { CDraggable } from '../../components/cDroppable/CDroppable';
import Diamond from './diamond/Diamond';
import BeePuzzle from './diamond/bee/BeePuzzle';
import { Board } from '../mat4/entities/option.entity';
import Pre14Options from './Pre14Options';
import './Pre14.css';

const WIDTH = 150;

const data: Board[] = [
  { id: 'pool-1', options: ['bee', 'tree', 'ring', 'handFan'] },
  { id: 'pool-a', options: [], hasOnlyChild: true },
  { id: 'pool-b', options: [], hasOnlyChild: true },
  { id: 'pool-c', options: [], hasOnlyChild: true },
  { id: 'pool-d', options: [], hasOnlyChild: true },
];

const options: Pre14Options = {
  bee: { id: 'bee', child: 'bee', opacity: 1, rotate: 0 },
  handFan: { id: 'handFan', child: 'handFan', opacity: 1, rotate: 270 },
  ring: { id: 'ring', child: 'ring', opacity: 1, rotate: 180 },
  tree: { id: 'tree', child: 'tree', opacity: 1, rotate: 90 },
};

const Pre14 = () => {
  const [boards, setBoards] = useState<Board[]>(data);

  const handleBoardsChange = (list: Board[]) => setBoards(list);

  return (
    <div className='pre14'>
      <DragDrop droppables={boards} onChange={handleBoardsChange}>
        <div className='pre14__puzzle'>
          {boards.slice(1, boards.length).map((pool, i) => (
            <CDroppable key={pool.id} id={pool.id}>
              <Diamond
                content={pool.options.map(opt => (
                  <CDraggable
                    key={`${pool.id}-${opt}`}
                    id={opt}
                    index={i}
                    child={resolveFigure(options[opt as keyof Pre14Options].child)}
                  />
                ))}
                width={WIDTH}
                rotation={i < 2 ? 90 * (i + 1) : 1080 / (i + 1)}
                activeBorder={pool.options.length > 0}
              />
            </CDroppable>
          ))}
          <div className='pre14__puzzle-center'></div>
        </div>
        <CDroppable id='pool-1'>
          <div className='pre14__options'>
            {boards[0]?.options.map((opt, i) => (
              <Diamond
                key={`pool-1-${opt}`}
                content={
                  <CDraggable
                    id={opt}
                    index={i}
                    child={resolveFigure(options[opt as keyof Pre14Options].child)}
                  />
                }
                width={WIDTH}
                rotation={options[opt as keyof Pre14Options].rotate}
              />
            ))}
          </div>
        </CDroppable>
      </DragDrop>
    </div>
  );
};

function resolveFigure(name: string) {
  switch (name) {
    case 'tree':
      return <BeePuzzle key='tree-puzzle' />;
    case 'ring':
      return <BeePuzzle key='ring-puzzle' />;
    case 'handFan':
      return <BeePuzzle key='handFan-puzzle' />;
    default:
      return <BeePuzzle key='bee-puzzle' />;
  }
}

export default Pre14;
