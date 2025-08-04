<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TahunAjaran;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class TahunAjaranController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search']);
        $tahun_ajarans = TahunAjaran::when($request->search, function($q, $v)
                {
                    $q->where('tahun', 'like', "%$v%");
                })
                ->paginate(10)
                ->withQueryString();

           // $sekolahs = Sekolah::select('id', 'nama_sekolah')->get();

            return Inertia::render('TahunAjaran/Index', [
                'tahun_ajarans' => $tahun_ajarans,
                'filters' => $filters,
            ]);
    }

    public function create()
    {
       // $sekolahList  = Sekolah::all();
        return Inertia::render('TahunAjaran/Create');

    }

    public function store(Request $request)
    {
        $request->validate([
            'tahun' => 'required',
            'semester'=>'required',
            'tgl_mulai' => 'required|date',
            'tgl_akhir' => 'required|date',
            'is_active' => 'required',
        ]);

        TahunAjaran::create([
            'tahun' => $request->tahun,
            'semester' => $request->semester,
            'tgl_mulai' => $request->tgl_mulai,
            'tgl_akhir' => $request->tgl_akhir,
            'is_active' => $request->is_active

        ]);

        return redirect()->route('tahun_ajaran.index')->with('success', 'Tahun Ajaran berhasil ditambahkan');
    }

    public function edit(TahunAjaran $tahun_ajaran)
    {
      //  $sekolahList = Sekolah::all();
        return Inertia::render('TahunAjaran/Edit',compact('tahun_ajaran'));

    }

    public function update(Request $request, TahunAjaran $tahun_ajaran)
    {
        $request->validate([
            'tahun' => 'required',
            'semester'=>'required',
            'tgl_mulai' => 'required|date',
            'tgl_akhir' => 'required|date',
            'is_active' => 'required',
        ]);

        $tahun_ajaran->update([
            'tahun' => $request->tahun,
            'semester' => $request->semester,
            'tgl_mulai' => $request->tgl_mulai,
            'tgl_akhir' => $request->tgl_akhir,
            'is_active' => $request->is_active
        ]);

        return redirect()->route('tahun_ajaran.index')->with('success', 'TahunAjaran berhasil diupdate');
    }

    public function destroy(TahunAjaran $tahun_ajaran)
    {
        $tahun_ajaran->delete();

        return redirect()->route('tahun_ajaran.index')->with('success', 'Tahun Ajaran berhasil dihapus');
    }
}
