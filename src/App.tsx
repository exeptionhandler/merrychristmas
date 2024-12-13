import React from 'react';
import CardEditor from './components/CardEditor';
import SnowAnimation from './components/SnowAnimation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50">
      <SnowAnimation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Christmas Card Creator
          </h1>
        </div>
      </header>
      <main>
        <CardEditor />
      </main>
    </div>
  );
}

export default App;