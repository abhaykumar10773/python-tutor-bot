import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import SettingsPage from './pages/SettingsPage';
import QuizPage from './pages/QuizPage';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;