<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JenisMataPelajaran;
use App\Models\KelompokMataPelajaran;
use App\Models\MataPelajaran;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class MataPelajaranController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search']);
        $mata_pelajarans = MataPelajaran::with(['kelompokMataPelajaran','jenisMataPelajaran'])
        ->when($request->search, function($q, $v)
                {
                    $q->where('nama_mata_pelajaran', 'like', "%$v%");
                })
                ->paginate(10)
                ->withQueryString();

           // $sekolahs = Sekolah::select('id', 'nama_sekolah')->get();

            return Inertia::render('MataPelajaran/Index', [
                'mata_pelajarans' => $mata_pelajarans,
                'filters' => $filters,
            ]);
    }

    public function create()
    {
       $kelompokList = KelompokMataPelajaran::all();
       $jenisList = JenisMataPelajaran::all();
        return Inertia::render('MataPelajaran/Create',compact(['kelompokList','jenisList']));

    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_mata_pelajaran' => 'required',
            'kelompok_mata_pelajaran_id' => 'required',
            'jenis_mata_pelajaran_id' => 'required'
        ]);

        MataPelajaran::create([
            'nama_mata_pelajaran' => $request->nama_mata_pelajaran,
            'kelompok_mata_pelajaran_id' => $request->kelompok_mata_pelajaran_id,
            'jenis_mata_pelajaran_id' => $request->jenis_mata_pelajaran_id
        ]);

        return redirect()->route('mata_pelajaran.index')->with('success', 'Kelompok Mata Pelajaran berhasil ditambahkan');
    }

    public function edit(MataPelajaran $mata_pelajaran)
    {
      //  $sekolahList = Sekolah::all();
        $kelompokList = KelompokMataPelajaran::all();
        $jenisList = JenisMataPelajaran::all();
        return Inertia::render('MataPelajaran/Edit',compact(['mata_pelajaran','kelompokList','jenisList']));

    }

    public function update(Request $request, MataPelajaran $mata_pelajaran)
    {
        $request->validate([
            'nama_mata_pelajaran' => 'required',
            'kelompok_mata_pelajaran_id' => 'required',
            'jenis_mata_pelajaran_id' => 'required'
        ]);

        $mata_pelajaran->update([
            'nama_mata_pelajaran' => $request->nama_mata_pelajaran,
            'kelompok_mata_pelajaran_id' => $request->kelompok_mata_pelajaran_id,
            'jenis_mata_pelajaran_id' => $request->jenis_mata_pelajaran_id
        ]);

        return redirect()->route('mata_pelajaran.index')->with('success', 'MataPelajaran berhasil diupdate');
    }

    public function destroy(MataPelajaran $mata_pelajaran)
    {
        $mata_pelajaran->delete();

        return redirect()->route('mata_pelajaran.index')->with('success', 'Kelompok Mata Pelajaran berhasil dihapus');
    }
}
