import FormSekolah from '@/Components/FormSekolah';
import React from 'react';

export default function Create() {
  return (
    <div className="container mt-4">
      <h3>Tambah Sekolah</h3>
      <FormSekolah submitUrl="/admin/sekolah" method="POST" />
    </div>
  );
}
