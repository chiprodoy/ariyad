import React from 'react';
import { useForm, Link, usePage } from '@inertiajs/react';

export default function Form({ mataPelajaran = null, kelompokList, jenisList }) {
    const { data, setData, post, put, processing, errors } = useForm({
        nama_mata_pelajaran: mataPelajaran?.nama_mata_pelajaran || '',
        kelompok_mata_pelajaran_id: mataPelajaran?.kelompok_mata_pelajaran_id || '',
        jenis_mata_pelajaran_id: mataPelajaran?.jenis_mata_pelajaran_id || '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        mataPelajaran
            ? put(route('mata_pelajaran.update', mataPelajaran.id))
            : post(route('mata_pelajaran.store'));
    };

    return (
        <div class="p-4 bg-white shadow">
            <h1 className="text-2xl font-bold mb-4">{mataPelajaran ? 'Edit' : 'Tambah'} Mata Pelajaran</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Nama Mata Pelajaran</label>
                    <input
                        type="text"
                        value={data.nama_mata_pelajaran}
                        onChange={e => setData('nama_mata_pelajaran', e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.nama_mata_pelajaran && <div className="text-red-500">{errors.nama_mata_pelajaran}</div>}
                </div>

                <div>
                    <label>Kelompok</label>
                    <select
                        value={data.kelompok_mata_pelajaran_id}
                        onChange={e => setData('kelompok_mata_pelajaran_id', e.target.value)}
                        className="border p-2 w-full"
                    >
                        <option value="">Pilih</option>
                        {kelompokList.map(k => (
                            <option key={k.id} value={k.id}>{k.nama_kelompok_mata_pelajaran}</option>
                        ))}
                    </select>
                    {errors.kelompok_mata_pelajaran_id && <div className="text-red-500">{errors.kelompok_mata_pelajaran_id}</div>}
                </div>

                <div>
                    <label>Jenis</label>
                    <select
                        value={data.jenis_mata_pelajaran_id}
                        onChange={e => setData('jenis_mata_pelajaran_id', e.target.value)}
                        className="border p-2 w-full"
                    >
                        <option value="">Pilih</option>
                        {jenisList.map(j => (
                            <option key={j.id} value={j.id}>{j.nama_jenis_mata_pelajaran}</option>
                        ))}
                    </select>
                    {errors.jenis_mata_pelajaran_id && <div className="text-red-500">{errors.jenis_mata_pelajaran_id}</div>}
                </div>

                <div className="flex gap-4">
                    <button type="submit" disabled={processing} className="bg-green-600 text-white px-4 py-2 rounded">
                        Simpan
                    </button>
                    <Link href={route('mata_pelajaran.index')} className="text-gray-600">Batal</Link>
                </div>
            </form>
        </div>
    );
}
