import React from 'react';
import Layout from '@/Layouts/AdminLayout';
import { useForm, usePage, Link } from '@inertiajs/react';

export default function Index() {
    const { mata_pelajarans, filters,auth } = usePage().props;
    const { data, setData, get } = useForm({
        search: filters.search || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('mata_pelajaran.index'), { preserveScroll: true });
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Daftar Mata Pelajaran</h1>
                    {/* Filter */}
                    <form onSubmit={handleSearch} className="mb-4 flex gap-2 items-end">
                        <div>
                            <label className="block text-sm">Mata Pelajaran</label>
                            <input
                                type="text"
                                value={data.search}
                                onChange={e => setData('search', e.target.value)}
                                className="border rounded px-2 py-1"
                                placeholder="Cari..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Cari
                        </button>
                        <Link
                            href={route('mata_pelajaran.create')}
                            className="ml-auto btn btn-success"
                        >
                            Tambah
                        </Link>
                    </form>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-2 py-1">#</th>
                                    <th className="border px-2 py-1">Nama Mata Pelajaran</th>
                                    <th className="border px-2 py-1">Kelompok Mata Pelajaran</th>
                                    <th className="border px-2 py-1">Jenis Mata Pelajaran</th>
                                    <th className="border px-2 py-1">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mata_pelajarans.data.map((mata_pelajaran, i) => (
                                    <tr key={mata_pelajaran.id}>
                                        <td className="border px-2 py-1">{mata_pelajarans.from + i}</td>
                                        <td className="border px-2 py-1">{mata_pelajaran.nama_mata_pelajaran}</td>
                                        <td className="border px-2 py-1">{mata_pelajaran.kelompok_mata_pelajaran.nama_kelompok_mata_pelajaran}</td>
                                        <td className="border px-2 py-1">{mata_pelajaran.jenis_mata_pelajaran.nama_jenis_mata_pelajaran}</td>
                                        <td className="border px-2 py-1 space-x-2">
                                            <Link
                                                href={route('mata_pelajaran.edit', mata_pelajaran.id)}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={route('mata_pelajaran.destroy', mata_pelajaran.id)}
                                                className="btn btn-danger btn-sm"
                                                onClick={e => confirm('Hapus mata pelajaran ini?') || e.preventDefault()}
                                            >
                                                Hapus
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {mata_pelajarans.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-2 py-1 border rounded ${link.active ? 'bg-blue-500 text-white' : ''}`}
                            />
                        ))}
                    </div>

            </div>
        </Layout>
    );
}
