import { useEffect, useState } from 'react';

const ListData = () => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching data:', error));
  });
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>List of Posts</h1>
      <ul>
        {data.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListData;
