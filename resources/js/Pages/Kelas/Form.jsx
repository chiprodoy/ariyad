import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ kelas = {} }) {
    const { errors } = usePage().props;
    const { data, setData, post, put, processing, reset } = useForm({
        nama_kelas: kelas.nama_kelas || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (kelas.id) {
            put(route('kelas.update', kelas.id));
        } else {
            post(route('kelas.store'));
        }
    };

    return (
        <div className="  p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">
                {kelas.id ? 'Edit Guru' : 'Tambah Guru'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Nama Kelas</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nama_kelas}
                        onChange={(e) => setData('nama_kelas', e.target.value)}
                    />
                    {errors.nama_kelas && <div className="text-red-500 text-sm">{errors.nama_kelas}</div>}
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={processing}
                >
                    {processing ? 'Menyimpan...' : kelas.id ? 'Update' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}
