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

  // useMemo is used to memoize expensive calculations
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); // Only recompute when 'number' changes

  // referential equality for styles
  // This will not change unless 'dark' changes
  // This is useful for performance optimization
  // to avoid unnecessary re-renders of child components

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

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
