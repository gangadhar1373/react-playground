import { useState, useEffect } from 'react';
import './UseEffectExample.css';

const UseEffectExample = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_limit=15`)
        .then((response) => response.json())
        .then((json) => setItems(json))
        .catch((error) => console.error('Error fetching data:', error))
        .finally(() => setLoading(false));
    }, 1000); // Simulate loading delay
    return () => {
      console.log('Cleanup for resource type:', resourceType);
    };
  }, [resourceType]); // Dependency array to run effect when resourceType changes

  useEffect(() => {
    console.log('Mounting component');
    // This effect runs only once when the component mounts
    return () => {
      console.log('Unmounting component');
      // Cleanup logic when the component unmounts
    };
  }, []); // Empty dependency array means this runs once on mount

  // Example of using useEffect to track window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Runs once on mount and cleans up on unmount

  return (
    <div className='use-effect-example-container'>
      <h2>useEffect Example</h2>
      <p>Current window width: {windowWidth}px</p>
      <div className='button-group'>
        <button
          onClick={() => {
            setResourceType('posts');
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType('comments');
          }}
        >
          Comments
        </button>
        <button
          onClick={() => {
            setResourceType('users');
          }}
        >
          Users
        </button>
      </div>
      <h3 className='resource-container'>Resource Type: {resourceType}</h3>
      <div className='items-list'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => (
            <pre key={item.id} className='item'>
              {JSON.stringify(item, null, 2)}
            </pre>
          ))
        )}
      </div>
    </div>
  );
};

export default UseEffectExample;
