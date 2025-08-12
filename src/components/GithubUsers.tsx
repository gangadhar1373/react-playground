import { useState, useDeferredValue, useEffect } from 'react';
import './GithubUsers.css';
import GithubCard from './GithubCard';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface G {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [username, setUsername] = useState<string>('');

  const debouncedUsername = useDebouncedValue(username, 500);
  const deferredUsername = useDeferredValue(debouncedUsername);

  useEffect(() => {
    if (deferredUsername && deferredUsername.trim() !== '') {
      setLoading(true);
      fetch(`https://api.github.com/search/users?q=${deferredUsername}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUsers(data.items || []);
          setError(null);
        })
        .catch((error) => {
          setError(error);
          setUsers([]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setUsers([]);
      setLoading(false);
      setError(null);
    }
  }, [deferredUsername]);

  return (
    <div>
      <h1 className='users-container'>GitHub Users</h1>
      <div className='user-name'>
        <input
          className='user-input'
          type='text'
          placeholder='Enter user name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Unable to fetch users data! Please try again!</p>}
      {!loading && !error && users && users.length > 0 && (
        <div className='users-container'>
          {users.map((user: G) => (
            <GithubCard id={user.id} name={user.login} url={user.html_url} image={user.avatar_url} key={user.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GithubUsers;
