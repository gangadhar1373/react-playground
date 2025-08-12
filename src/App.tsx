import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './navigation/SideNav';
import { NAV, NavGroup } from './navigation/navData';
import './App.css';

// Optional: use icons for groups
import { faPuzzlePiece, faCode } from '@fortawesome/free-solid-svg-icons';
import Counter from './components/Counter';
import ListData from './components/ListData';
import Login from './components/Login';
import HelloCard from './components/HelloCard';
import GithubUsers from './components/GithubUsers';
import { List } from './hooks/useDeferredValue';

function Layout() {
  // Add icons to groups (if desired)
  const groupsWithIcons: NavGroup[] = [
    { ...NAV[0], icon: faPuzzlePiece },
    { ...NAV[1], icon: faCode },
  ];

  return (
    <div className='app'>
      <SideNav title='Playground' groups={groupsWithIcons} />
      <main className='main-content'>
        <Routes>
          {/* Components */}
          <Route path='/components/hello-card' element={<HelloCard name='Gangadhar Mullapudi' />} />
          <Route path='/components/counter' element={<Counter />} />
          <Route path='/components/login' element={<Login />} />
          <Route path='/components/list-data' element={<ListData />} />
          <Route path='/components/github-users' element={<GithubUsers />} />

          {/* Hooks */}
          <Route path='/hooks/useState' element={<div>useState Demo</div>} />
          <Route path='/hooks/useEffect' element={<div>useEffect Demo</div>} />
          <Route path='/hooks/useDeferredValue' element={<List />} />

          {/* Default */}
          <Route path='*' element={<div>Select an item from the sidebar</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
