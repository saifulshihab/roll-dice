import React from 'react';
import Dice from './Components/Dice';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';

function App() {
  return (
    <div className='container'>
      <Header />
      <div style={{ display: 'flex' }}>
        <Dice one />
        <Dice two />
        <Dice three />
      </div>
      <Button />
    </div>
  );
}

export default App;
