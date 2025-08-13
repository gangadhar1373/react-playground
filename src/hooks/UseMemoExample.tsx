import { useState, useMemo } from 'react';
import './UseMemoExample.css';

const slowFunction = (num: number) => {
  console.log('Calling slow function');
  // eslint-disable-next-line no-empty
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); // Only recompute when 'number' changes
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div className='use-memo-example-container'>
      <h2>useMemo Example</h2>
      <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div style={themeStyles} className='number-display'>
        <p>Double: {doubleNumber}</p>
      </div>
    </div>
  );
};

export default UseMemoExample;
