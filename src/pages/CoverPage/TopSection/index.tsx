'use client';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import UserCardCarousel from './UserCardCarousel';
import { UserData } from '@/types/UserDataType';
import ChipCardCarousel from './ChipCardCarousel';
import Information from './Information';

const TopSection = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/userData');

        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }

        const data: UserData[] = await res.json();
        setUsers(data);
      } catch (error: any) {
        console.error('Error fetching users:', error);
        setError('Failed to load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div
      className="relative w-full h-full pb-16"
      style={{
        backgroundImage: 'linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%)',
      }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Asset1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        }}
      />
      <div className="relative w-full h-full space-y-16">
        <div className="xl:px-40 px-8 space-y-16">
          <Navbar />
          <div className="xl:grid xl:grid-cols-2 gap-20">
            <Information />
            {loading ? <>Loading</> : <UserCardCarousel users={users} />}
          </div>
        </div>
        <div className="max-xl:hidden">
          <ChipCardCarousel />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
