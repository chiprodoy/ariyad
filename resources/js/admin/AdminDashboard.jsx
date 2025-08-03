// AdminLayout.jsx
import React from 'react';
import Sidebar from '../Components/SideBar';
import TopNavbar from '../Components/Navbar';
import DashboardContent from './DashboardContent';

const AdminDashboard = () => {
    const role = 'admin'; // bisa didapat dari context / auth storage
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <TopNavbar />
        <main className="p-4">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
