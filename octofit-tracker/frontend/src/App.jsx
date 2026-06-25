import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

const rawCodespaceName = import.meta.env.VITE_CODESPACE_NAME;
const codespaceName = rawCodespaceName && rawCodespaceName !== 'undefined'
  ? String(rawCodespaceName).trim()
  : '';

const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

function getWarning() {
  if (!codespaceName) {
    return (
      <div className="alert alert-warning m-0">
        <strong>Note:</strong> <code>VITE_CODESPACE_NAME</code> is not defined.
        The app is using the localhost API fallback.
        Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> for Codespaces support.
      </div>
    );
  }
  return null;
}

function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p>Modern multi-tier workout and team tracking app.</p>
      <p>
        API base URL: <code>{apiBaseUrl}</code>
      </p>
    </div>
  );
}

function Layout() {
  return (
    <>
      {getWarning()}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            OctoFit Tracker
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/teams">
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/activities">
                  Activities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/workouts">
                  Workouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users apiBaseUrl={apiBaseUrl} />} />
        <Route path="/teams" element={<Teams apiBaseUrl={apiBaseUrl} />} />
        <Route path="/activities" element={<Activities apiBaseUrl={apiBaseUrl} />} />
        <Route path="/workouts" element={<Workouts apiBaseUrl={apiBaseUrl} />} />
        <Route path="/leaderboard" element={<Leaderboard apiBaseUrl={apiBaseUrl} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
