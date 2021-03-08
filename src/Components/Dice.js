import React from 'react';

const Dice = ({ one, two, three, four, five, six }) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i
        style={{ fontSize: '6rem' }}
        className={`fas fa-dice-${
          one
            ? 'one'
            : two
            ? 'two'
            : three
            ? 'three'
            : four
            ? 'four'
            : five
            ? 'five'
            : six && 'six'
        }`}
      ></i>
    </div>
  );
};

export default Dice;
