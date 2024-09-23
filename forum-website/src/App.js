// src/App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import HomePage from './HomePage';
import TierList from './TierList'; // Import the TierList component
import Footer from './Footer'; // Import Footer component

function App() {
  const [user, setUser] = useState(null); // Track logged-in user
 
  return (
    <Router>
      <div className="App">
      <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/Profile" element={<Profile user={user} />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/TierList" element={<TierList />} />
        </Routes>
        <Footer /> {/* Footer at the bottom of the page */}
      </div>
    </Router>
  );
}

export default App;
