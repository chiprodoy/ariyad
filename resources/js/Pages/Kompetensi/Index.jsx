import React from 'react';
import Layout from '@/Layouts/AdminLayout';
import { useForm, usePage, Link } from '@inertiajs/react';

export default function Index() {
    const { kompetensis, mata_pelajarans, filters,auth } = usePage().props;
    const { data, setData, get } = useForm({
        search: filters.search || '',
        mata_pelajaran_id: filters.mata_pelajaran_id || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('kompetensi.index'), { preserveScroll: true });
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Daftar Kompetensi</h1>
                    {/* Filter */}
                    <form onSubmit={handleSearch} className="mb-4 flex gap-4 items-end">
                        <div>
                            <label className="block text-sm">Kompetensi / predikat</label>
                            <input
                                type="text"
                                value={data.search}
                                onChange={e => setData('search', e.target.value)}
                                className="border rounded px-2 py-1"
                                placeholder="Cari..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Mata Pelajaran</label>
                            <select
                                value={data.sekolah_id}
                                onChange={e => setData('sekolah_id', e.target.value)}
                                className="border rounded px-2 py-1"
                            >
                                <option value="">Semua</option>
                                {mata_pelajarans.map(mata_pelajaran => (
                                    <option key={mata_pelajaran.id} value={mata_pelajaran.id}>
                                        {mata_pelajaran.nama_mata_pelajaran}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Cari
                        </button>
                        <Link
                            href={route('kompetensi.create')}
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
                                    <th className="border px-2 py-1">Mata Pelajaran</th>
                                    <th className="border px-2 py-1">Nilai Min</th>
                                    <th className="border px-2 py-1">Nilai Max</th>
                                    <th className="border px-2 py-1">Nilai Huruf</th>
                                    <th className="border px-2 py-1">Predikat</th>
                                    <th className="border px-2 py-1">Kompetensi</th>
                                    <th className="border px-2 py-1">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kompetensis.data.map((kompetensi, i) => (
                                    <tr key={kompetensi.id}>
                                        <td className="border px-2 py-1">{kompetensis.from + i}</td>
                                        <td className="border px-2 py-1">{kompetensi.mata_pelajaran.nama_mata_pelajaran}</td>
                                        <td className="border px-2 py-1">{kompetensi.nilai_min}</td>
                                        <td className="border px-2 py-1">{kompetensi.nilai_max}</td>
                                        <td className="border px-2 py-1">{kompetensi.nilai_huruf}</td>
                                        <td className="border px-2 py-1">{kompetensi.predikat}</td>
                                        <td className="border px-2 py-1">{kompetensi.kompetensi}</td>
                                        <td className="border px-2 py-1 space-x-2">
                                            <Link
                                                href={route('kompetensi.edit', kompetensi.id)}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={route('kompetensi.destroy', kompetensi.id)}
                                                className="btn btn-danger btn-sm"
                                                onClick={e => confirm('Hapus kompetensi ini?') || e.preventDefault()}
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
                        {kompetensis.links.map((link, index) => (
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
