import React from 'react';
import FigureProps from '../../activities/mat4/entities/figure.props';
import './Pencil.css';

const Pencil: React.FC<FigureProps> = ({ width, opacity = 1 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 156.57 54.24'
      width={width}
      opacity={opacity}
    >
      <g id='Capa_2' data-name='Capa 2'>
        <g id='Capa_1-2' data-name='Capa 1'>
          <text className='pencil--1' transform='translate(0 45.95)'>
            <tspan className='pencil--2'></tspan>
            <tspan x='58.77' y='0'></tspan>
          </text>
          <path
            className='pencil--3'
            d='M22.4,50.11l20,1.91-4.32-5.34,1.18-7.33L35,33.78l1.14-7.1L19.74,39.91c3.14,3.52,2.66,10.2,2.66,10.2'
          />
          <polygon
            className='pencil--4'
            points='42.41 52.02 128.99 30.54 125.85 17.88 39.27 39.34 38.09 46.68 42.41 52.02'
          />
          <path className='pencil--5' d='M8.7,48.81l13.7,1.3s.48-6.68-2.66-10.2Z' />
          <path
            className='pencil--6'
            d='M129,30.54c3.65,1.66,6.18-1.54,6.18-1.54L128.91,3.68s-3.86-1.38-6.2,1.53C124.27,11.52,127.42,24.23,129,30.54Z'
          />
          <path
            className='pencil--6'
            d='M135.18,29c3.66,1.68,6.19-1.54,6.19-1.54L135.09,2.14s-3.85-1.37-6.18,1.54Z'
          />
          <path className='pencil--7' d='M141.37,27.46c25.18-.72,16.14-36.32-6.28-25.32Z' />
          <polygon
            className='pencil--6'
            points='39.27 39.34 125.85 17.88 122.71 5.21 36.13 26.68 34.99 33.78 39.27 39.34'
          />
          <path
            className='pencil--8'
            d='M22.78,49.67s.48-6.55-2.64-10m19.4-.55-4.25-5.47,1.13-7m6.24,24.88-4.28-5.24,1.16-7.2,86-21.08M141,27.44c25.14-.79,15.88-35.68-6.24-24.86M134.84,29c3.64,1.64,6.16-1.51,6.16-1.51L134.76,2.58s-3.83-1.35-6.15,1.51m.09,26.37c3.62,1.63,6.14-1.51,6.14-1.51L128.61,4.09s-3.83-1.36-6.16,1.5m-86,21.08,86-21.08,6.25,24.87-86,21.09L22.78,49.67l-1.6-.15a4.86,4.86,0,0,1-2.57-8.64l1.53-1.22Z'
          />
        </g>
      </g>
    </svg>
  );
};

export default Pencil;
