import FigureProps from '../../activities/mat4/entities/figure.props';
import './Star.css';

const Star = ({ width, opacity }: FigureProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 105.66 104.9'
      width={width}
      opacity={opacity}
    >
      <g id='Capa_2' data-name='Capa 2'>
        <g id='Capa_1-2' data-name='Capa 1'>
          <path
            className='star--1'
            d='M105,45.07a7.36,7.36,0,0,1-2.82,7.25L80,69l1.1,27.77a7.37,7.37,0,0,1-11.61,6.32L46.75,87,20.67,96.67a7.37,7.37,0,0,1-9.59-9.09L19.29,61,2.08,39.21A7.37,7.37,0,0,1,7.76,27.28l27.79-.38L51,3.78A7.36,7.36,0,0,1,64.07,5.49L73,31.8,99.8,39.33A7.32,7.32,0,0,1,105,45.07'
          />
          <path
            className='star--2'
            d='M105,45.07a7.36,7.36,0,0,1-2.82,7.25L80,69l1.1,27.77a7.37,7.37,0,0,1-11.61,6.32L46.75,87,20.67,96.67a7.37,7.37,0,0,1-9.59-9.09L19.29,61,2.08,39.21A7.37,7.37,0,0,1,7.76,27.28l27.79-.38L51,3.78A7.36,7.36,0,0,1,64.07,5.49L73,31.8,99.8,39.33A7.32,7.32,0,0,1,105,45.07Z'
          />
        </g>
      </g>
    </svg>
  );
};

export default Star;
