import React from 'react';
import Layout from '@/Layouts/AdminLayout';
import TopNavbar from '@/Components/Navbar';
import Sidebar from '@/Components/SideBar';
import { useForm, usePage, Link } from '@inertiajs/react';

export default function Index() {
    const { siswas, sekolahs, filters,auth } = usePage().props;
    const { data, setData, get } = useForm({
        search: filters.search || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('siswa.index'), { preserveScroll: true });
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Daftar Siswa</h1>
                    {/* Filter */}
                    <form onSubmit={handleSearch} className="mb-4 flex gap-2 items-end">
                        <div>
                            <label className="block text-sm">Nama / NIS</label>
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
                            href={route('siswa.create')}
                            className="ml-auto btn btn-success"
                        >
                            Tambah Siswa
                        </Link>
                    </form>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-2 py-1">#</th>
                                    <th className="border px-2 py-1">NIS</th>
                                    <th className="border px-2 py-1">Nama</th>
                                    <th className="border px-2 py-1">NISN</th>
                                    <th className="border px-2 py-1">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {siswas.data.map((siswa, i) => (
                                    <tr key={siswa.id}>
                                        <td className="border px-2 py-1">{siswas.from + i}</td>
                                        <td className="border px-2 py-1">{siswa.nis}</td>
                                        <td className="border px-2 py-1">{siswa.nama_siswa}</td>
                                        <td className="border px-2 py-1">{siswa.nisn}</td>
                                        <td className="border px-2 py-1 space-x-2">
                                            <Link
                                                href={route('siswa.edit', siswa.id)}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={route('siswa.destroy', siswa.id)}
                                                className="btn btn-danger btn-sm"
                                                onClick={e => confirm('Hapus siswa ini?') || e.preventDefault()}
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
                        {siswas.links.map((link, index) => (
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
