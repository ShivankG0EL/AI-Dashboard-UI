"use client";
import AvatarList from '@/components/AvatarList';
import CreateAvatarModal from '@/components/CreateAvatarModal';
import Header from '@/components/Header';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 md:px-8 pt-8 pb-20">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Avatars</h2>
          <AvatarList />
        </div>
      </main>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed cursor-pointer bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Create New Avatar"
      >
        + New Avatar
      </button>
      {isModalOpen && <CreateAvatarModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
