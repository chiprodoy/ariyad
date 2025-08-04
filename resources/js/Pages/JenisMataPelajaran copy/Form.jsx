import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ jenis_mata_pelajaran = {} }) {
    const { errors } = usePage().props;
    const { data, setData, post, put, processing, reset } = useForm({
        nama_jenis_mata_pelajaran: jenis_mata_pelajaran.nama_jenis_mata_pelajaran || '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (jenis_mata_pelajaran.id) {
            put(route('jenis_mata_pelajaran.update', jenis_mata_pelajaran.id));
        } else {
            post(route('jenis_mata_pelajaran.store'));
        }
    };

    return (
        <div className="  p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">
                {jenis_mata_pelajaran.id ? 'Edit ' : 'Tambah '} Jenis Mata Pelajaran
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Jenis mata pelajaran</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.nama_jenis_mata_pelajaran}
                        onChange={(e) => setData('nama_jenis_mata_pelajaran', e.target.value)}
                    />
                    {errors.nama_jenis_mata_pelajaran && <div className="text-red-500 text-sm">{errors.nama_jenis_mata_pelajaran}</div>}
                </div>


                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={processing}
                >
                    {processing ? 'Menyimpan...' : jenis_mata_pelajaran.id ? 'Update' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}
