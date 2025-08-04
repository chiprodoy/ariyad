<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Kelas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KelasController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search']);
        $kelas = Kelas::when($request->search, function($q, $v)
                {
                    $q->where('nama_kelas', 'like', "%$v%");
                })
                ->paginate(10)
                ->withQueryString();

           // $sekolahs = Sekolah::select('id', 'nama_sekolah')->get();

            return Inertia::render('Kelas/Index', [
                'kelas' => $kelas,
                'filters' => $filters,
            ]);
    }

    public function create()
    {
       // $sekolahList  = Sekolah::all();
        return Inertia::render('Kelas/Create');

    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_kelas' => 'required',
        ]);

        Kelas::create([
            'nama_kelas' => $request->nama_kelas,
        ]);

        return redirect()->route('kelas.index')->with('success', 'Kelas berhasil ditambahkan');
    }

    public function edit(Kelas $kelas)
    {
      //  $sekolahList = Sekolah::all();
        return Inertia::render('Kelas/Edit',compact('kelas'));

    }

    public function update(Request $request, Kelas $kelas)
    {
        $request->validate([
            'nama_kelas' => 'required',

        ]);

        $kelas->update([
            'nama_kelas' => $request->nama,
        ]);

        return redirect()->route('kelas.index')->with('success', 'Kelas berhasil diupdate');
    }

    public function destroy(Kelas $kelas)
    {
        $kelas->delete();
        return redirect()->route('kelas.index')->with('success', 'Kelas berhasil dihapus');
    }

}
