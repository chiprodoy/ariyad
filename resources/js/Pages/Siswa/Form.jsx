import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ siswa = {} }) {
    const { errors } = usePage().props;
    const { data, setData, post, put, processing, reset } = useForm({
        nama: siswa.nama_siswa || '',
        nis: siswa.nis || '',
        nisn: siswa.nisn || '',
        email: (!siswa.user) ? '' : siswa.user.email,
        password: '',
        nomor_telpon: (!siswa.user) ? '' : siswa.user.nomor_telpon
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (siswa.id) {
            put(route('siswa.update', siswa.id));
        } else {
            post(route('siswa.store'));
        }
    };

    return (
        <div className="  p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">
                {siswa.id ? 'Edit Siswa' : 'Tambah Siswa'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">NIS</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nis}
                        onChange={(e) => setData('nis', e.target.value)}
                    />
                    {errors.nis && <div className="text-red-500 text-sm">{errors.nis}</div>}
                </div>
                <div>
                    <label className="block font-medium">NISN</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nisn}
                        onChange={(e) => setData('nisn', e.target.value)}
                    />
                    {errors.nisn && <div className="text-red-500 text-sm">{errors.nisn}</div>}
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

                {!siswa.id && (
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

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={processing}
                >
                    {processing ? 'Menyimpan...' : siswa.id ? 'Update' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}
