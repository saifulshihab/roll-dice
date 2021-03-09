import React from 'react';
import Dice from './Components/Dice';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import { useSelector } from 'react-redux';

function App() {
  const diceRoll = useSelector((state) => state.diceRoll);
  const { dices, count } = diceRoll;

  const sum =
    dices &&
    dices
      ?.map((data) => data.value)
      .reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

  return (
    <div className='container'>
      <Header />
      <div className='sumCountContainer'>
        <div className='sumCount'>
          <h3>Sum : {sum}</h3>
        </div>
        <div className='sumCount'>
          <h3>Count : {count}</h3>
        </div>
      </div>{' '}
      <Button />
      <div className='dice_wrapper'>
        {dices &&
          dices.map((data, idx) => {
            let diceNumber =
              data?.value === 1
                ? 'one'
                : data?.value === 2
                ? 'two'
                : data?.value === 3
                ? 'three'
                : data?.value === 4
                ? 'four'
                : data?.value === 5
                ? 'five'
                : data?.value === 6 && 'six';

            return <Dice key={idx} diceNumber={diceNumber} />;
          })}
      </div>
    </div>
  );
}

export default App;
