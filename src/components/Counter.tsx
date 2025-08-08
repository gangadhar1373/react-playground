import React from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className='counter-container'>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span> counter: {count} </span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
