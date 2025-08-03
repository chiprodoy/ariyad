import React from 'react';
import TopNavbar from '@/Components/Navbar';
import Sidebar from '@/Components/SideBar';
import { Link, usePage } from '@inertiajs/react';

export default function Index() {
  const { data,auth } = usePage().props;
  return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar role={auth.user.roles[0].role_name} />
          <div style={{ flex: 1 }}>
                  <div className="flex-grow-1"></div>
                  <TopNavbar />
            <main>
              <div className="p-4">
{/* <h2>Daftar Sekolah</h2>
       <Link href="/admin/sekolah/create" className="btn btn-primary mb-3">Tambah Sekolah</Link> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>NPSN</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map(sekolah => (
            <tr key={sekolah.id}>
              <td>{sekolah.nama_sekolah}</td>
              <td>{sekolah.alamat_sekolah}</td>
              <td>{sekolah.npsn}</td>
              <td>
                <Link href={`/admin/sekolah/${sekolah.id}/edit`} className="btn btn-sm btn-warning me-2">Edit</Link>
                {/* <Link
                  href={`/admin/sekolah/${sekolah.id}`}
                  method="delete"
                  as="button"
                  className="btn btn-sm btn-danger"
                  onBefore={() => confirm('Yakin ingin menghapus?')}
                >
                  Hapus
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
              </div>
            </main>
          </div>
        </div>

  );
}
