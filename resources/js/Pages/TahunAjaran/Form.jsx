import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ tahun_ajaran = {} }) {
    const { errors } = usePage().props;
    const { data, setData, post, put, processing, reset } = useForm({
        tahun: tahun_ajaran.tahun || '',
        semester: tahun_ajaran.semester || '',
        tgl_mulai: tahun_ajaran.tgl_mulai || '',
        tgl_akhir: tahun_ajaran.tgl_akhir || '',
        is_active: tahun_ajaran.is_active || ''

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tahun_ajaran.id) {
            put(route('tahun_ajaran.update', tahun_ajaran.id));
        } else {
            post(route('tahun_ajaran.store'));
        }
    };

    return (
        <div className="  p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">
                {tahun_ajaran.id ? 'Edit Tahun Ajaran' : 'Tambah Tahun Ajaran'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Tahun</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.tahun}
                        onChange={(e) => setData('tahun', e.target.value)}
                    />
                    {errors.tahun && <div className="text-red-500 text-sm">{errors.tahun}</div>}
                </div>
                <div>
                    <label className="block font-medium">Semester</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.semester}
                        onChange={(e) => setData('semester', e.target.value)}
                    />
                    {errors.semester && <div className="text-red-500 text-sm">{errors.semester}</div>}
                </div>
                <div>
                    <label className="block font-medium">Tgl mulai</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.tgl_mulai}
                        onChange={(e) => setData('tgl_mulai', e.target.value)}
                    />
                    {errors.tgl_mulai && <div className="text-red-500 text-sm">{errors.tgl_mulai}</div>}
                </div>
                <div>
                    <label className="block font-medium">Tgl akhir</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2"
                        value={data.tgl_akhir}
                        onChange={(e) => setData('tgl_akhir', e.target.value)}
                    />
                    {errors.tgl_akhir && <div className="text-red-500 text-sm">{errors.tgl_akhir}</div>}
                </div>
                <div>
                    <label className="block font-medium">Aktif?</label>
                    <select
                        className="w-full border rounded p-2"
                        value={data.is_active}
                        onChange={(e) => setData('is_active', e.target.value)}
                    >
                        <option value="">Pilih</option>
                        <option value="1">Ya</option>
                        <option value="0">Tidak</option>

                    </select>
                    {errors.is_active && (
                        <div className="text-red-500 text-sm">{errors.is_active}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    disabled={processing}
                >
                    {processing ? 'Menyimpan...' : tahun_ajaran.id ? 'Update' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}
