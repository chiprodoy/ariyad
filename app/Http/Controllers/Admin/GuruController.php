<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use App\Models\Sekolah;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class GuruController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search', 'sekolah_id']);
        $gurus = Guru::with('sekolah')
                ->when($request->search, function($q, $v)
                {
                    $q->where('nama', 'like', "%$v%")->orWhere('nip', 'like', "%$v%");
                })
                ->when($request->sekolah_id, function($q, $v) {
                    $q->where('sekolah_id', $v);
                } )
                ->paginate(10)
                ->withQueryString();

            $sekolahs = Sekolah::select('id', 'nama_sekolah')->get();

            return Inertia::render('Guru/Index', [
                'gurus' => $gurus,
                'sekolahs' => $sekolahs,
                'filters' => $filters,
            ]);
    }

    public function create()
    {
        $sekolahList  = Sekolah::all();
        return Inertia::render('Guru/Create',compact('sekolahList'));

    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'nomor_telpon'=>'required',
            'nip' => 'required|unique:gurus,nip',
            'sekolah_id' => 'required|exists:sekolahs,id',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->nama,
            'email' => $request->email,
            'nomor_telpon'=> $request->nomor_telpon,
            'password' => Hash::make($request->password)
        ]);

        $user->roles()->attach(3,['user_modify'=>'su']);

        Guru::create([
            'nama' => $request->nama,
            'nip' => $request->nip,
            'sekolah_id' => $request->sekolah_id,
            'user_id' => $user->id
        ]);

        return redirect()->route('guru.index')->with('success', 'Guru berhasil ditambahkan');
    }

    public function edit(Guru $guru)
    {
        $sekolahList = Sekolah::all();
        return Inertia::render('Guru/Edit',compact('sekolahList','guru'));

    }

    public function update(Request $request, Guru $guru)
    {
        $request->validate([
            'nama' => 'required',
            'nip' => 'required|unique:gurus,nip,' . $guru->id,
            'sekolah_id' => 'required|exists:sekolahs,id',
        ]);

        $guru->update([
            'nama' => $request->nama,
            'nip' => $request->nip,
            'sekolah_id' => $request->sekolah_id,
        ]);

        $guru->user->update([
            'name' => $request->nama,
            'nomor_telpon'=> $request->nomor_telpon,

        ]);

        return redirect()->route('guru.index')->with('success', 'Guru berhasil diupdate');
    }

    public function destroy(Guru $guru)
    {
        $guru->user->delete();
        $guru->delete();

        return redirect()->route('guru.index')->with('success', 'Guru berhasil dihapus');
    }
}
