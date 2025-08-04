import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ kompetensi = {} ,mata_pelajarans}) {
    const { errors } = usePage().props;
    const { data, setData, post, put, processing, reset } = useForm({
        mata_pelajaran_id: kompetensi.mata_pelajaran_id || '',
        nilai_min: kompetensi.nilai_min || '',
        nilai_max: kompetensi.nilai_max || '',
        nilai_huruf: kompetensi.nilai_huruf || '',
        predikat: kompetensi.predikat || '',
        kompetensi: kompetensi.kompetensi | ''
    });
    console.log(kompetensi);
    const optionsNilai = [];
    for (let i = 10; i <= 100; i += 10) {
        optionsNilai.push(i);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (kompetensi.id) {
            put(route('kompetensi.update', kompetensi.id));
        } else {
            post(route('kompetensi.store'));
        }
    };

    return (
        <div className="  p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">
                {kompetensi.id ? 'Edit Kompetensi' : 'Tambah Kompetensi'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm">Mata Pelajaran</label>
                        <select
                            value={data.mata_pelajaran_id}
                            onChange={e => setData('mata_pelajaran_id', e.target.value)}
                            className="border rounded"
                        >
                            <option value="">Pilih</option>
                                {mata_pelajarans.map(mata_pelajaran => (
                                    <option key={mata_pelajaran.id} value={mata_pelajaran.id}>
                                        {mata_pelajaran.nama_mata_pelajaran}
                                    </option>
                                ))}
                        </select>
                </div>
                <div>
                    <label className="block text-sm">Nilai Minimal</label>
                        <select
                            value={data.nilai_min}
                            onChange={e => setData('nilai_min', e.target.value)}
                            className="border rounded px-4 py-1"
                        >
                            <option value=''>Pilih</option>

                            <option key='0' value='0'>0</option>
                        {optionsNilai.map((number) => (
                                    <option key={number} value={number}>
                                        {number}
                                    </option>
                                    ))}
                        </select>
                </div>
                <div>
                    <label className="block text-sm">Nilai Maximal</label>
                        <select
                            value={data.nilai_max}
                            onChange={e => setData('nilai_max', e.target.value)}
                            className="border rounded px-4 py-1"
                        >
                            <option value=''>Pilih</option>

                            <option key='0' value='0'>0</option>

                             {optionsNilai.map((number) => (
                                    <option key={number} value={number}>
                                        {number}
                                    </option>
                                    ))}
                        </select>
                </div>
                <div>
                    <label className="block text-sm">Nilai Huruf</label>
                        <select
                            value={data.nilai_huruf}
                            onChange={e => setData('nilai_huruf', e.target.value)}
                            className="border rounded px-4 py-1"
                        >
                            <option value=''>Pilih</option>
                            <option key='A' value='A'>A</option>
                            <option key='B' value='B'>B</option>
                            <option key='C' value='C'>C</option>
                            <option key='D' value='D'>D</option>
                            <option key='E' value='E'>E</option>
                        </select>
                </div>
                <div>
                    <label className="block text-sm">Predikat</label>
                        <select
                            value={data.predikat}
                            onChange={e => setData('predikat', e.target.value)}
                            className="border rounded px-4 py-1"
                        >
                            <option value=''>Pilih</option>
                            <option key='A' value='sangat baik'>Sangat Baik</option>
                            <option key='B' value='baik'>Baik</option>
                            <option key='C' value='cukup'>Cukup</option>
                            <option key='D' value='kurang'>Kurang</option>
                            <option key='E' value='sangat kurang'>Sangat Kurang</option>
                        </select>
                </div>
                <div>
                    <label className="block font-medium">Kompetensi</label>
                    <textarea
                        className="w-full border rounded p-2"
                        value={data.kompetensi}
                        onChange={(e) => setData('kompetensi', e.target.value)}
                    />
                    {errors.kompetensi && <div className="text-red-500 text-sm">{errors.kompetensi}</div>}
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={processing}
                >
                    {processing ? 'Menyimpan...' : kompetensi.id ? 'Update' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}
