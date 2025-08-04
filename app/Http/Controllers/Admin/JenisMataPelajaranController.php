<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JenisMataPelajaran;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class JenisMataPelajaranController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search']);
        $jenis_mata_pelajarans = JenisMataPelajaran::when($request->search, function($q, $v)
                {
                    $q->where('nama_jenis_mata_pelajaran', 'like', "%$v%");
                })
                ->paginate(10)
                ->withQueryString();

           // $sekolahs = Sekolah::select('id', 'nama_sekolah')->get();

            return Inertia::render('JenisMataPelajaran/Index', [
                'jenis_mata_pelajarans' => $jenis_mata_pelajarans,
                'filters' => $filters,
            ]);
    }

    public function create()
    {
       // $sekolahList  = Sekolah::all();
        return Inertia::render('JenisMataPelajaran/Create');

    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_jenis_mata_pelajaran' => 'required',
        ]);

        JenisMataPelajaran::create([
            'nama_jenis_mata_pelajaran' => $request->nama_jenis_mata_pelajaran,

        ]);

        return redirect()->route('jenis_mata_pelajaran.index')->with('success', 'Tahun Ajaran berhasil ditambahkan');
    }

    public function edit(JenisMataPelajaran $jenis_mata_pelajaran)
    {
      //  $sekolahList = Sekolah::all();
        return Inertia::render('JenisMataPelajaran/Edit',compact('jenis_mata_pelajaran'));

    }

    public function update(Request $request, JenisMataPelajaran $jenis_mata_pelajaran)
    {
        $request->validate([
            'nama_jenis_mata_pelajaran' => 'required',
        ]);

        $jenis_mata_pelajaran->update([
            'nama_jenis_mata_pelajaran' => $request->nama_jenis_mata_pelajaran,

        ]);

        return redirect()->route('jenis_mata_pelajaran.index')->with('success', 'JenisMataPelajaran berhasil diupdate');
    }

    public function destroy(JenisMataPelajaran $jenis_mata_pelajaran)
    {
        $jenis_mata_pelajaran->delete();

        return redirect()->route('jenis_mata_pelajaran.index')->with('success', 'Tahun Ajaran berhasil dihapus');
    }
}
