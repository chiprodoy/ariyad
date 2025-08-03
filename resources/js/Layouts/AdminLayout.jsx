import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import Sidebar from '@/Components/SideBar';
import TopNavbar from '@/Components/Navbar';

export default function AdminLayout({ children }) {
  const { auth } = usePage().props;

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      window.location.href = route('logout');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar role={auth.user.roles[0].role_name} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <TopNavbar />


        {/* Page Content */}
        <main className=" bg-gray-100 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
