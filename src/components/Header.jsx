"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

function Header() {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    const hour = new Date().getHours();
    let greetingText = '';
    
    if (hour < 12) greetingText = 'Good morning';
    else if (hour < 18) greetingText = 'Good afternoon';
    else greetingText = 'Good evening';
    
    setGreeting(greetingText);
  }, []);
  
  return (
    <header className="bg-gradient-to-r from-purple-800 to-blue-700 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-20 w-20 relative">
            <Image
              src="/logo.webp"
              alt="Dashboard Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Avatar Dashboard</h1>
            <p className="text-md opacity-90 mt-1">{greeting}, User!</p>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="bg-white text-purple-800 px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-all cursor-pointer hover:scale-105 transform duration-200">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
