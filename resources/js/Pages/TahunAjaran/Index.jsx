import React from 'react';
import Layout from '@/Layouts/AdminLayout';
import { useForm, usePage, Link } from '@inertiajs/react';

export default function Index() {
    const { tahun_ajarans, filters,auth } = usePage().props;
    const { data, setData, get } = useForm({
        search: filters.search || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('tahun_ajaran.index'), { preserveScroll: true });
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Daftar Tahun Ajaran</h1>
                    {/* Filter */}
                    <form onSubmit={handleSearch} className="mb-4 flex gap-2 items-end">
                        <div>
                            <label className="block text-sm">Tahun</label>
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
                            href={route('tahun_ajaran.create')}
                            className="ml-auto btn btn-success"
                        >
                            Tambah Tahun Ajaran
                        </Link>
                    </form>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-2 py-1">#</th>
                                    <th className="border px-2 py-1">Tahun Ajaran</th>
                                    <th className="border px-2 py-1">Semester</th>
                                    <th className="border px-2 py-1">Tgl Mulai</th>
                                    <th className="border px-2 py-1">Tgl Akhir</th>
                                    <th className="border px-2 py-1">Aktif</th>
                                    <th className="border px-2 py-1">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tahun_ajarans.data.map((tahun_ajaran, i) => (
                                    <tr key={tahun_ajaran.id}>
                                        <td className="border px-2 py-1">{tahun_ajarans.from + i}</td>
                                        <td className="border px-2 py-1">{tahun_ajaran.tahun}</td>
                                        <td className="border px-2 py-1">{tahun_ajaran.semester}</td>
                                        <td className="border px-2 py-1">{tahun_ajaran.tgl_mulai}</td>
                                        <td className="border px-2 py-1">{tahun_ajaran.tgl_akhir}</td>
                                        <td className="border px-2 py-1">{tahun_ajaran.is_active}</td>
                                        <td className="border px-2 py-1 space-x-2">
                                            <Link
                                                href={route('tahun_ajaran.edit', tahun_ajaran.id)}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={route('tahun_ajaran.destroy', tahun_ajaran.id)}
                                                className="btn btn-danger btn-sm"
                                                onClick={e => confirm('Hapus tahun_ajaran ini?') || e.preventDefault()}
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
                        {tahun_ajarans.links.map((link, index) => (
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
