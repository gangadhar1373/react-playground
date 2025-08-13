import { useMemo, useState, useDeferredValue, useEffect } from 'react';
import './useDeferredValueExample.css';

export const List = ({ input }: any) => {
  const deferredInput = useDeferredValue(input);
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
  useEffect(() => {
    console.log('input', input, 'deferredInput', deferredInput);
  }, [input, deferredInput]);
  return list;
};

export const UseDeferredValueExample = () => {
  const [input, setInput] = useState<string>('');
  return (
    <div className='use-deferred-value-example-container'>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type something...' />
      <List input={input} />
    </div>
  );
};
