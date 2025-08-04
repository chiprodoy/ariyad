<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MataPelajaran;
use App\Models\Kompetensi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class KompetensiController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search', 'mata_pelajaran_id']);
        $kompetensi = Kompetensi::with('mata_pelajaran')
                ->when($request->search, function($q, $v)
                {
                    $q->where('kompetensi', 'like', "%$v%")->orWhere('predikat', 'like', "%$v%");
                }) ->when($request->mata_pelajaran_id, function($q, $v) {
                    $q->where('mata_pelajaran_id', $v);
                } )
                ->paginate(10)
                ->withQueryString();

        $mata_pelajaran = MataPelajaran::all();

        return Inertia::render('Kompetensi/Index', [
                'mata_pelajarans' => $mata_pelajaran,
                'kompetensis' => $kompetensi,
                'filters' => $filters,
        ]);
    }

    public function create()
    {
       // $sekolahList  = Sekolah::all();
        $mata_pelajarans = MataPelajaran::all();

        return Inertia::render('Kompetensi/Create',compact(['mata_pelajarans']));

    }

    public function store(Request $request)
    {
        $request->validate([
            'mata_pelajaran_id' => 'required',
            'nilai_min'=>'required|numeric',
            'nilai_max' => 'required|numeric',
            'nilai_huruf' => 'required',
            'predikat' => 'required',
            'kompetensi' => 'required'
        ]);

        Kompetensi::create([
            'mata_pelajaran_id' => $request->mata_pelajaran_id,
            'nilai_min'=>$request->nilai_min,
            'nilai_max' =>$request->nilai_max,
            'nilai_huruf' =>$request->nilai_huruf,
            'predikat' =>$request->predikat,
            'kompetensi' =>$request->kompetensi
        ]);

        return redirect()->route('kompetensi.index')->with('success', 'Kompetensi berhasil ditambahkan');
    }

    public function edit(Kompetensi $kompetensi)
    {
      //  $sekolahList = Sekolah::all();
        $mata_pelajarans = MataPelajaran::all();

        return Inertia::render('Kompetensi/Edit',compact(['kompetensi','mata_pelajarans']));

    }

    public function update(Request $request, Kompetensi $kompetensi)
    {
        $request->validate([
            'mata_pelajaran_id' => 'required',
            'nilai_min'=>'required|numeric',
            'nilai_max' => 'required|numeric',
            'nilai_huruf' => 'required',
            'predikat' => 'required',
            'kompetensi' => 'required'
        ]);

        $kompetensi->update([
            'nama_kompetensi' => $request->nama,
            'nis' => $request->nis,
            'nisn' => $request->nisn,
        ]);



        return redirect()->route('kompetensi.index')->with('success', 'Kompetensi berhasil diupdate');
    }

    public function destroy(Kompetensi $kompetensi)
    {
        $kompetensi->delete();

        return redirect()->route('kompetensi.index')->with('success', 'Kompetensi berhasil dihapus');
    }
}
