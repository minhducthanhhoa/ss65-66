import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const RandomNumber: React.FC = () => {
  const numbers = useSelector((state: any) => state.numbers);
  const dispatch = useDispatch();

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    dispatch({ type: 'ADD_RANDOM_NUMBER', payload: randomNumber });
  };

  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
