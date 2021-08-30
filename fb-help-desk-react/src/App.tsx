import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div className='App'>
      {isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
