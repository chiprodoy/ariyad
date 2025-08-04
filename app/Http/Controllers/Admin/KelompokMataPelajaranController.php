<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KelompokMataPelajaran;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class KelompokMataPelajaranController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search']);
        $kelompok_mata_pelajarans = KelompokMataPelajaran::when($request->search, function($q, $v)
                {
                    $q->where('nama_kelompok_mata_pelajaran', 'like', "%$v%");
                })
                ->paginate(10)
                ->withQueryString();

           // $sekolahs = Sekolah::select('id', 'nama_sekolah')->get();

            return Inertia::render('KelompokMataPelajaran/Index', [
                'kelompok_mata_pelajarans' => $kelompok_mata_pelajarans,
                'filters' => $filters,
            ]);
    }

    public function create()
    {
       // $sekolahList  = Sekolah::all();
        return Inertia::render('KelompokMataPelajaran/Create');

    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_kelompok_mata_pelajaran' => 'required',
        ]);

        KelompokMataPelajaran::create([
            'nama_kelompok_mata_pelajaran' => $request->nama_kelompok_mata_pelajaran,

        ]);

        return redirect()->route('kelompok_mata_pelajaran.index')->with('success', 'Kelompok Mata Pelajaran berhasil ditambahkan');
    }

    public function edit(KelompokMataPelajaran $kelompok_mata_pelajaran)
    {
      //  $sekolahList = Sekolah::all();
        return Inertia::render('KelompokMataPelajaran/Edit',compact('kelompok_mata_pelajaran'));

    }

    public function update(Request $request, KelompokMataPelajaran $kelompok_mata_pelajaran)
    {
        $request->validate([
            'nama_kelompok_mata_pelajaran' => 'required',
        ]);

        $kelompok_mata_pelajaran->update([
            'nama_kelompok_mata_pelajaran' => $request->nama_kelompok_mata_pelajaran,

        ]);

        return redirect()->route('kelompok_mata_pelajaran.index')->with('success', 'KelompokMataPelajaran berhasil diupdate');
    }

    public function destroy(KelompokMataPelajaran $kelompok_mata_pelajaran)
    {
        $kelompok_mata_pelajaran->delete();

        return redirect()->route('kelompok_mata_pelajaran.index')->with('success', 'Kelompok Mata Pelajaran berhasil dihapus');
    }
}
