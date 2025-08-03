import React from 'react';
import FormSekolah from '../../Components/FormSekolah';

export default function Edit({ sekolah }) {
  return (
    <div className="container mt-4">
      <h3>Edit Sekolah</h3>
      <FormSekolah sekolah={sekolah} submitUrl={`/admin/sekolah/${sekolah.id}`} method="PUT" />
    </div>
  );
}
