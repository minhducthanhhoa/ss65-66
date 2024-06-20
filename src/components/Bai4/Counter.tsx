import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter: React.FC = () => {
  const counter = useSelector((state: any) => state.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
    </div>
  );
};

export default Counter;
