import { useState } from 'react';
import Pencil from '../../trunk/pencil/Pencil';
import Moon from '../../trunk/moon/Moon';
import Ball from '../../trunk/ball/Ball';
import Snail from '../../trunk/snail/Snail';
import Flower from '../../trunk/flower/Flower';
import IceCream from '../../trunk/iceCream/IceCream';
import Star from '../../trunk/star/Star';
import Sun from '../../trunk/sun/Sun';
import CDroppable, { CDraggable } from '../../components/cDroppable/CDroppable';
import { Act4Options, Act4Hint } from './Act4Boards';
import { Board } from './entities/option.entity';
import DragDrop from '../../components/dragDrop/DragDrop';
import './Mat4.css';

const WIDTH = 70;

const data: Board[] = [
  {
    id: 'board-1',
    options: ['snail1'],
    isNotDroppable: true,
  },
  {
    id: 'board-2',
    options: ['ball1'],
    isNotDroppable: true,
  },
  {
    id: 'board-3',
    options: [],
    hasOnlyChild: true,
    hint: 'ball',
  },
  {
    id: 'board-4',
    options: [],
    hasOnlyChild: true,
    hint: 'pencil',
  },
  {
    id: 'board-5',
    options: [],
    hasOnlyChild: true,
    hint: 'moon',
  },
  {
    id: 'board-6',
    options: ['flower1'],
    isNotDroppable: true,
  },
  {
    id: 'board-7',
    options: ['iceCream1'],
    isNotDroppable: true,
  },
  {
    id: 'board-8',
    options: ['star1'],
    isNotDroppable: true,
  },
  {
    id: 'board-9',
    options: ['sun1'],
    isNotDroppable: true,
  },
  {
    id: 'board-10',
    options: ['pencil1', 'moon1', 'ball2'],
  },
];

const options: Act4Options = {
  snail1: { id: 'snail1', index: 1, child: 'snail', opacity: 1 },
  ball1: { id: 'ball1', index: 2, child: 'ball', opacity: 1 },
  pencil1: { id: 'pencil1', index: 3, child: 'pencil', opacity: 1 },
  moon1: { id: 'moon1', index: 4, child: 'moon', opacity: 1 },
  ball2: { id: 'ball2', index: 5, child: 'ball', opacity: 1 },
  flower1: { id: 'flower1', index: 6, child: 'flower', opacity: 1 },
  iceCream1: { id: 'iceCream1', index: 7, child: 'ice-cream', opacity: 1 },
  star1: { id: 'star1', index: 8, child: 'star', opacity: 1 },
  sun1: { id: 'sun1', index: 9, child: 'sun', opacity: 1 },
};

const hint: Act4Hint = {
  ball: { id: 'ball', index: 2, child: 'ball', opacity: 0.2 },
  pencil: { id: 'pencil', index: 3, child: 'pencil', opacity: 0.2 },
  moon: { id: 'moon', index: 4, child: 'moon', opacity: 0.2 },
};

const Mat4 = () => {
  const [boards, setBoards] = useState<Board[]>(data);

  const handleBoardsChange = (list: Board[]) => setBoards(list);

  return (
    <div className='act4'>
      <DragDrop droppables={data} onChange={handleBoardsChange}>
        <div className='act4__board'>
          {boards.slice(0, boards.length - 1).map((cell, i) =>
            !cell.isNotDroppable ? (
              <CDroppable
                key={cell.id}
                id={cell.id}
                children={cell.options.map(child => (
                  <CDraggable
                    key={child}
                    id={child}
                    index={i}
                    child={resolveFigure(
                      options[child as keyof Act4Options].child,
                      options[child as keyof Act4Options].opacity,
                    )}
                  />
                ))}
                hint={
                  cell.options.length === 0 &&
                  resolveFigure(
                    hint[cell.hint as keyof Act4Hint].child,
                    hint[cell.hint as keyof Act4Hint].opacity,
                  )
                }
              />
            ) : (
              <div key={cell.id}>
                {cell.options.map(child =>
                  resolveFigure(
                    options[child as keyof Act4Options].child,
                    options[child as keyof Act4Options].opacity,
                  ),
                )}
              </div>
            ),
          )}
        </div>
        <CDroppable id='board-10'>
          <div className='act4__bar'>
            {boards[boards.length - 1]?.options.map((cell, i) => (
              <CDraggable
                key={`draggeble-${cell}`}
                id={cell}
                index={i + 10}
                child={resolveFigure(
                  options[cell as keyof Act4Options].child,
                  options[cell as keyof Act4Options].index,
                )}
              />
            ))}
          </div>
        </CDroppable>
      </DragDrop>
    </div>
  );
};

function resolveFigure(name: string, opacity?: number) {
  switch (name) {
    case 'snail':
      return <Snail key='snail' width={WIDTH} opacity={opacity} />;
    case 'pencil':
      return <Pencil key='pencil' width={WIDTH * 1.5} opacity={opacity} />;
    case 'star':
      return <Star key='star' width={WIDTH} opacity={opacity} />;
    case 'flower':
      return <Flower key='flower' width={WIDTH} opacity={opacity} />;
    case 'moon':
      return <Moon key='moon' width={WIDTH} opacity={opacity} />;
    case 'ice-cream':
      return <IceCream key='ice-cream' width={WIDTH * 0.7} opacity={opacity} />;
    case 'sun':
      return <Sun key='sun' width={WIDTH} opacity={opacity} />;
    default:
      return <Ball key='ball' width={WIDTH} opacity={opacity} />;
  }
}

export default Mat4;
