import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, BookOpen, Settings, Brain } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Bot className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">PyKids Tutor</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/learn"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/learn')
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <Link
              to="/quiz"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/quiz')
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Brain className="h-5 w-5" />
              <span>Quiz</span>
            </Link>
            <Link
              to="/settings"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/settings')
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar