import React from 'react';
import TopNavbar from '@/Components/Navbar';
import Sidebar from '@/Components/SideBar';
import { useForm, usePage, Link } from '@inertiajs/react';

export default function Index() {
    const { gurus, sekolahs, filters,auth } = usePage().props;
    const { data, setData, get } = useForm({
        search: filters.search || '',
        sekolah_id: filters.sekolah_id || ''
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('guru.index'), { preserveScroll: true });
    };

    return (
          <div style={{ display: 'flex', minHeight: '100vh' }}>
               <Sidebar role={auth.user.roles[0].role_name} />
                <div style={{ flex: 1 }}>
                        <div className="flex-grow-1"></div>
                        <TopNavbar />
                    <main>

                    <div className="p-4">
                                    <h1 className="text-2xl font-bold mb-4">Daftar Guru</h1>

                    {/* Filter */}
                    <form onSubmit={handleSearch} className="mb-4 flex gap-2 items-end">
                        <div>
                            <label className="block text-sm">Nama / NIP</label>
                            <input
                                type="text"
                                value={data.search}
                                onChange={e => setData('search', e.target.value)}
                                className="border rounded px-2 py-1"
                                placeholder="Cari..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm">Sekolah</label>
                            <select
                                value={data.sekolah_id}
                                onChange={e => setData('sekolah_id', e.target.value)}
                                className="border rounded px-2 py-1"
                            >
                                <option value="">Semua</option>
                                {sekolahs.map(sekolah => (
                                    <option key={sekolah.id} value={sekolah.id}>
                                        {sekolah.nama_sekolah}
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
                            href={route('guru.create')}
                            className="ml-auto btn btn-success"
                        >
                            Tambah Guru
                        </Link>
                    </form>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-2 py-1">#</th>
                                    <th className="border px-2 py-1">NIP</th>
                                    <th className="border px-2 py-1">Nama</th>
                                    <th className="border px-2 py-1">Sekolah</th>
                                    <th className="border px-2 py-1">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gurus.data.map((guru, i) => (
                                    <tr key={guru.id}>
                                        <td className="border px-2 py-1">{gurus.from + i}</td>
                                        <td className="border px-2 py-1">{guru.nip}</td>
                                        <td className="border px-2 py-1">{guru.nama}</td>
                                        <td className="border px-2 py-1">{guru.sekolah?.nama_sekolah}</td>
                                        <td className="border px-2 py-1 space-x-2">
                                            <Link
                                                href={route('guru.edit', guru.id)}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                as="button"
                                                method="delete"
                                                href={route('guru.destroy', guru.id)}
                                                className="btn btn-danger btn-sm"
                                                onClick={e => confirm('Hapus guru ini?') || e.preventDefault()}
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
                        {gurus.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-2 py-1 border rounded ${link.active ? 'bg-blue-500 text-white' : ''}`}
                            />
                        ))}
                    </div>

              </div>
                    </main>

              </div>
        </div>
    );
}
