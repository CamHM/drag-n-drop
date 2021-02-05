import React from 'react';
import CSS from 'csstype';
import './Diamond.css';

type Props = {
  content: SVGElement | React.ReactNode;
  width?: number;
  rotation?: number;
  activeBorder?: boolean;
};

const Diamond = ({ content, width = 150, rotation = 0, activeBorder = false }: Props) => {
  const style: CSS.Properties = {
    width: `${width}px`,
    height: `${width}px`,
    transform: `rotate(${rotation}deg)`,
    backgroundColor: `${activeBorder ? '#abed2f' : '#7a7a7a'}`,
  };

  const contentStyle: CSS.Properties = {
    transform: `rotate(-${rotation}deg)`,
  };

  return (
    <div style={style} className='diamond diamond__border'>
      <div className='diamond__content' style={contentStyle}>
        {content}
      </div>
    </div>
  );
};

export default Diamond;
