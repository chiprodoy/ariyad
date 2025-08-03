import TopNavbar from '@/Components/Navbar';
import Sidebar from '@/Components/SideBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Navbar } from 'react-bootstrap';

export default function Dashboard({ auth }) {
      const role = 'admin'; // bisa didapat dari context / auth storage
    return (

    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar role={'admin'} />
      <div style={{ flex: 1 }}>
              <div className="flex-grow-1"></div>
              <TopNavbar />
        <main>
          <div className="p-4">
            <h2>Dashboard</h2>
            <p>Selamat datang di halaman admin.</p>
          </div>
        </main>
      </div>
    </div>
    );
}
