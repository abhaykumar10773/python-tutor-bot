import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface Character {
  name: string;
  image: string;
}

function SettingsPage() {
  const [apiKey, setApiKey] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character>({
    name: 'Professor Python',
    image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=150&h=150&fit=crop&crop=faces'
  });

  const characters: Character[] = [
    {
      name: 'Professor Python',
      image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Code Ninja',
      image: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Data Dragon',
      image: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  const handleSave = () => {
    // Save settings logic here
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
        
        {/* API Key Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">API Configuration</h3>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              AI Model API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              placeholder="Enter your API key"
            />
            <p className="text-sm text-gray-500">
              Your API key is stored securely and never shared with anyone.
            </p>
          </div>
        </div>

        {/* Character Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Tutor</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {characters.map((character) => (
              <button
                key={character.name}
                onClick={() => setSelectedCharacter(character)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCharacter.name === character.name
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <p className="font-medium text-gray-900">{character.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Save className="h-5 w-5" />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;