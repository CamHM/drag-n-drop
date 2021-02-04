import { useState } from 'react';
import { Board } from '../mat4/entities/option.entity';
import DragDrop from '../../components/dragDrop/DragDrop';
import { Jar5Options } from './Jar5Boards';
import GirlShoes from '../../clothes/girlShoes/GirlShoes';
import GuyShoes from '../../clothes/guyShoes/GuyShoes';
import LongSleeve from '../../clothes/longSleeve/LongSleeve';
import Pant from '../../clothes/pant/Pant';
import Shirt from '../../clothes/shirt/Shirt';
import Skirt from '../../clothes/skirt/Skirt';
import CDroppable, { CDraggable } from '../../components/cDroppable/CDroppable';
import './Jar15.css';

const WIDTH = 170;

const data: Board[] = [
  {
    id: 'board-1',
    options: ['shirt', 'pant', 'guyShoes'],
  },
  {
    id: 'board-2',
    options: ['longSleeve', 'skirt', 'girlShoes'],
  },
];

const options: Jar5Options = {
  girlShoes: { id: 'girlShoes', index: 1, child: 'girlShoes', opacity: 1 },
  guyShoes: { id: 'guyShoes', index: 2, child: 'guyShoes', opacity: 1 },
  longSleeve: { id: 'longSleeve', index: 3, child: 'longSleeve', opacity: 1 },
  pant: { id: 'pant', index: 4, child: 'pant', opacity: 1 },
  shirt: { id: 'shirt', index: 5, child: 'shirt', opacity: 1 },
  skirt: { id: 'skirt', index: 6, child: 'skirt', opacity: 1 },
};

const Jar15 = () => {
  const [boards, setBoards] = useState<Board[]>(data);

  const handleBoardsChange = (list: Board[]) => setBoards(list);

  return (
    <div className='jar15'>
      <DragDrop droppables={boards} onChange={handleBoardsChange}>
        <CDroppable id='board-1' showBackground={false}>
          <div className='jar15__board'>
            {boards[0]?.options.map((opt, i) => {
              const option = options[opt as keyof Jar5Options];
              return (
                <CDraggable
                  key={`draggable-${opt}`}
                  id={option.id}
                  index={i || 0}
                  child={resolveFigure(
                    options[opt as keyof Jar5Options].child,
                    options[opt as keyof Jar5Options].opacity,
                  )}
                />
              );
            })}
          </div>
        </CDroppable>
        <div className='jar15__center'>Chicosss</div>
        <CDroppable id='board-2' showBackground={false}>
          <div className='jar15__board'>
            {boards[1]?.options.map((opt, i) => {
              const option = options[opt as keyof Jar5Options];
              return (
                <CDraggable
                  key={`draggable-${opt}`}
                  id={option.id}
                  index={i || 0}
                  child={resolveFigure(
                    options[opt as keyof Jar5Options].child,
                    options[opt as keyof Jar5Options].opacity,
                  )}
                />
              );
            })}
          </div>
        </CDroppable>
      </DragDrop>
    </div>
  );
};

function resolveFigure(name: string, opacity?: number) {
  switch (name) {
    case 'girlShoes':
      return <GirlShoes key='girlShoes' width={WIDTH} opacity={opacity} />;
    case 'guyShoes':
      return <GuyShoes key='guyShoes' width={WIDTH} opacity={opacity} />;
    case 'longSleeve':
      return <LongSleeve key='longSleeve' width={WIDTH} opacity={opacity} />;
    case 'pant':
      return <Pant key='pant' width={WIDTH * 0.6} opacity={opacity} />;
    case 'shirt':
      return <Shirt key='shirt' width={WIDTH} opacity={opacity} />;
    default:
      return <Skirt key='skirt' width={WIDTH * 0.8} opacity={opacity} />;
  }
}

export default Jar15;
