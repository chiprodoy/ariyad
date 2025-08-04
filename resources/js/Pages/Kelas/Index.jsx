import React from 'react';
import Layout from '@/Layouts/AdminLayout';
;
import { Link, usePage } from '@inertiajs/react';

export default function Index() {
  const { kelas,auth } = usePage().props;
  return (
    <Layout>
            <div className="p-4">
        <h2>Daftar Kelas</h2>
       <Link href="/admin/kelas/create" className="btn btn-primary mb-3">Tambah Kelas</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nama Kelas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {kelas.data.map(kelas => (
            <tr key={kelas.id}>
              <td>{kelas.nama_kelas}</td>
              <td>
                <Link href={`/admin/kelas/${kelas.id}/edit`} className="btn btn-sm btn-warning me-2">Edit</Link>
                <Link
                  href={`/admin/kelas/${kelas.id}`}
                  method="delete"
                  as="button"
                  className="btn btn-sm btn-danger"
                  onBefore={() => confirm('Yakin ingin menghapus?')}
                >
                  Hapus
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
              </div>
</Layout>

  );
}
