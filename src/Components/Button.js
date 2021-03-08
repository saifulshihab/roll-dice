import React from 'react';

const Button = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button className='btn'>Roll Dice</button>
      <button className='btn'>Clear Dice</button>
    </div>
  );
};

export default Button;
