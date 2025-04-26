"use client";
import { useEffect, useState } from 'react';
import AvatarCard from './AvatarCard';
import axios from 'axios';

// Skeleton loader for avatar cards
const SkeletonAvatarCard = () => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border border-gray-100 animate-pulse">
    <div className="mb-4 relative">
      <div className="w-28 h-28 rounded-full bg-gray-200"></div>
    </div>
    <div className="h-5 w-24 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 w-16 bg-gray-200 rounded mb-3"></div>
    <div className="mt-2 h-10 w-20 bg-gray-200 rounded-md"></div>
  </div>
);

function AvatarList() {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get('https://reqres.in/api/users?page=2', {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
      .then(response => {
        // Check if response has the expected structure
        if (!response.data.data || !Array.isArray(response.data.data)) {
          throw new Error('Unexpected API response format');
        }
        
        // Process users from Reqres API - get first 3 users
        const users = response.data.data.slice(0, 3).map(user => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          avatar: user.avatar
        }));
        
        setAvatars(users);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching avatars:', err);
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        Error loading avatars: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
        {[1, 2, 3].map((index) => (
          <SkeletonAvatarCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
      {avatars.map((user) => (
        <AvatarCard 
          key={user.id} 
          name={`${user.firstName} ${user.lastName}`} 
          img={user.avatar} 
        />
      ))}
    </div>
  );
}

export default AvatarList;
