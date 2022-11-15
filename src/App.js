import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Missions from './pages/missions';
import Rockets from './pages/rockets';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
