import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ kelompok_mata_pelajaran = {} }) {
    const { errors } = usePage().props;
    const { data, setData, post, put, processing, reset } = useForm({
        nama_kelompok_mata_pelajaran: kelompok_mata_pelajaran.nama_kelompok_mata_pelajaran || '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (kelompok_mata_pelajaran.id) {
            put(route('kelompok_mata_pelajaran.update', kelompok_mata_pelajaran.id));
        } else {
            post(route('kelompok_mata_pelajaran.store'));
        }
    };

    return (
        <div className="  p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">
                {kelompok_mata_pelajaran.id ? 'Edit ' : 'Tambah '} Kelompok Mata Pelajaran
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Kelompok mata pelajaran</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nama_kelompok_mata_pelajaran}
                        onChange={(e) => setData('nama_kelompok_mata_pelajaran', e.target.value)}
                    />
                    {errors.nama_kelompok_mata_pelajaran && <div className="text-red-500 text-sm">{errors.nama_kelompok_mata_pelajaran}</div>}
                </div>


                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={processing}
                >
                    {processing ? 'Menyimpan...' : kelompok_mata_pelajaran.id ? 'Update' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}
