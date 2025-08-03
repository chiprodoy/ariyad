import React from 'react';
import { useForm } from '@inertiajs/react';

export default function FormSekolah({ sekolah = null, submitUrl, method }) {
  const { data, setData, post, put, processing, errors } = useForm({
    nama_sekolah: sekolah?.nama_sekolah || '',
    alamat_sekolah: sekolah?.alamat_sekolah || '',
    npsn: sekolah?.npsn || '',
  });

  const submit = e => {
    e.preventDefault();
    method === 'POST' ? post(submitUrl) : put(submitUrl);
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label>Nama Sekolah</label>
        <input type="text" className="form-control" value={data.nama_sekolah}
          onChange={e => setData('nama_sekolah', e.target.value)} />
        {errors.nama_sekolah && <div className="text-danger">{errors.nama_sekolah}</div>}
      </div>

      <div className="mb-3">
        <label>Alamat</label>
        <input type="text" className="form-control" value={data.alamat_sekolah}
          onChange={e => setData('alamat_sekolah', e.target.value)} />
        {errors.alamat_sekolah && <div className="text-danger">{errors.alamat_sekolah}</div>}
      </div>

      <div className="mb-3">
        <label>NPSN</label>
        <input type="text" className="form-control" value={data.npsn}
          onChange={e => setData('npsn', e.target.value)} />
        {errors.npsn && <div className="text-danger">{errors.npsn}</div>}
      </div>

      <button className="btn btn-success" disabled={processing}>
        {method === 'POST' ? 'Simpan' : 'Update'}
      </button>
    </form>
  );
}
