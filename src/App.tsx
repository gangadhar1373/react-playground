import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './navigation/SideNav';
import { NAV, NavGroup } from './navigation/nav';
import './App.css';

// Optional: use icons for groups
import { faPuzzlePiece, faCode } from '@fortawesome/free-solid-svg-icons';
import Counter from './components/Counter';

function Layout() {
  // Add icons to groups (if desired)
  const groupsWithIcons: NavGroup[] = [
    { ...NAV[0], icon: faPuzzlePiece },
    { ...NAV[1], icon: faCode },
  ];

  return (
    <div className='app'>
      <SideNav title='Playground' groups={groupsWithIcons} />
      <main style={{ flex: 1, padding: 24 }}>
        <Routes>
          {/* Components */}
          <Route path='/components/counter' element={<Counter />} />
          <Route path='/components/login' element={<div>Login Component</div>} />

          {/* Hooks */}
          <Route path='/hooks/useState' element={<div>useState Demo</div>} />
          <Route path='/hooks/useEffect' element={<div>useEffect Demo</div>} />

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
