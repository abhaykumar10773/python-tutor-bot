import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';
import { Bot, Brain, MessageSquare, Award } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <Bot className="h-16 w-16 text-purple-600 mb-8" />
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-6">
          Welcome to PyKids Tutor! 🐍
        </h1>
        <div className="max-w-3xl text-center mb-8">
          <p className="text-xl text-gray-600 mb-4">
            Start your amazing journey into Python programming with a friendly AI tutor! 
            We make learning to code fun and easy with interactive lessons, cool challenges, 
            and a helpful guide that adapts to how you learn.
          </p>
          <p className="text-xl text-gray-600">
            No boring lectures here - just fun conversations, exciting projects, and 
            achievements to collect as you become a Python pro! Ready to begin your 
            adventure?
          </p>
        </div>
        <button
          onClick={() => navigate('/learn')}
          className="px-8 py-4 bg-purple-600 text-white text-xl rounded-lg shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all"
        >
          Start Learning Python! 🚀
        </button>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-purple-600" />}
              title="Learn Your Way"
              description="Our AI tutor adapts to your learning style and pace, making sure you understand everything perfectly!"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-purple-600" />}
              title="Fun Conversations"
              description="Ask questions, get help, and learn through friendly chats with your personal Python guide."
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-purple-600" />}
              title="Earn Rewards"
              description="Complete challenges, solve puzzles, and collect cool badges as you learn!"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default HomePage;