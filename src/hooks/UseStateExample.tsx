import { useState } from 'react';
import './UseStateExample.css';

// export const UseStateExample = () => {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     // setCount(count + 1);
//     // this is asynchronous update in React
//     // multiple calls here will be batched into one update
//     // so the count will only increase by 1
//     // to avoid this, use functional update form
//     // setCount((c) => c + 1);
//     // or just call setCount once
//     setCount((c) => c + 1);
//   };
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

export const UseStateExample = () => {
  const [state, setState] = useState({
    count: 0,
    feedback: '',
  });
  return (
    <div className='use-state-example-container'>
      <h2>useState Example</h2>
      <p>This example demonstrates how to use useState with an object.</p>
      <div className='count-display'>
        <button
          onClick={() => {
            setState((prev) => ({ ...prev, count: prev.count + 1 }));
          }}
        >
          Click me
        </button>
        <p>You clicked {state.count} times</p>
      </div>
      <div className='feedback-display'>
        <input
          type='text'
          value={state.feedback}
          onChange={(e) => setState((prev) => ({ ...prev, feedback: e.target.value }))}
          placeholder='Type your feedback...'
        />
        <p>Feedback: {state.feedback}</p>
      </div>
    </div>
  );
};
