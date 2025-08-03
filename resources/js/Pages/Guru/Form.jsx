import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ guru = {}, sekolahList = [] }) {
    const { errors } = usePage().props;
    const { data, setData, post, put, processing, reset } = useForm({
        nama: guru.nama || '',
        nip: guru.nip || '',
        email: (!guru.user) ? '' : guru.user.email,
        password: '',
        sekolah_id: guru.sekolah_id || '',
        nomor_telpon: (!guru.user) ? '' : guru.user.nomor_telpon
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (guru.id) {
            put(route('guru.update', guru.id));
        } else {
            post(route('guru.store'));
        }
    };

    return (
        <div className="  p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">
                {guru.id ? 'Edit Guru' : 'Tambah Guru'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">NIP</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nip}
                        onChange={(e) => setData('nip', e.target.value)}
                    />
                    {errors.nip && <div className="text-red-500 text-sm">{errors.nip}</div>}
                </div>
                <div>
                    <label className="block font-medium">Nama</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nama}
                        onChange={(e) => setData('nama', e.target.value)}
                    />
                    {errors.nama && <div className="text-red-500 text-sm">{errors.nama}</div>}
                </div>
                <div>
                    <label className="block font-medium">Nomor Telpon</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nomor_telpon}
                        onChange={(e) => setData('nomor_telpon', e.target.value)}
                    />
                    {errors.nomor_telpon && <div className="text-red-500 text-sm">{errors.nomor_telpon}</div>}
                </div>
                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full border rounded p-2"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                </div>

                {!guru.id && (
                    <div>
                        <label className="block font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full border rounded p-2"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        {errors.password && (
                            <div className="text-red-500 text-sm">{errors.password}</div>
                        )}
                    </div>
                )}

                <div>
                    <label className="block font-medium">Sekolah</label>
                    <select
                        className="w-full border rounded p-2"
                        value={data.sekolah_id}
                        onChange={(e) => setData('sekolah_id', e.target.value)}
                    >
                        <option value="">-- Pilih Sekolah --</option>
                        {sekolahList.map((sekolah) => (
                            <option key={sekolah.id} value={sekolah.id}>
                                {sekolah.nama_sekolah}
                            </option>
                        ))}
                    </select>
                    {errors.sekolah_id && (
                        <div className="text-red-500 text-sm">{errors.sekolah_id}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={processing}
                >
                    {processing ? 'Menyimpan...' : guru.id ? 'Update' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}
