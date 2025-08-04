<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class SiswaController extends Controller
{
    public function index(Request $request)
    {
        $filters = $request->only(['search', 'sekolah_id']);
        $siswas = Siswa::with('user')
                ->when($request->search, function($q, $v)
                {
                    $q->where('nama_siswa', 'like', "%$v%")->orWhere('nis', 'like', "%$v%");
                })
                ->paginate(10)
                ->withQueryString();

           // $sekolahs = Sekolah::select('id', 'nama_sekolah')->get();

            return Inertia::render('Siswa/Index', [
                'siswas' => $siswas,
                'filters' => $filters,
            ]);
    }

    public function create()
    {
       // $sekolahList  = Sekolah::all();
        return Inertia::render('Siswa/Create');

    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'nisn'=>'required',
            'nis' => 'required|unique:siswas,nis',
           // 'user_id' => 'required|exists:users,id',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->nama,
            'email' => $request->email,
            'nomor_telpon'=> $request->nomor_telpon,
            'password' => Hash::make($request->password)
        ]);

        $user->roles()->attach(4,['user_modify'=>'su']);

        Siswa::create([
            'nama_siswa' => $request->nama,
            'nisn' => $request->nisn,
            'nis' => $request->nis,
            'user_id' => $user->id
        ]);

        return redirect()->route('siswa.index')->with('success', 'Siswa berhasil ditambahkan');
    }

    public function edit(Siswa $siswa)
    {
      //  $sekolahList = Sekolah::all();
        return Inertia::render('Siswa/Edit',compact('siswa'));

    }

    public function update(Request $request, Siswa $siswa)
    {
        $request->validate([
            'nama' => 'required',
            'nisn' => 'required|unique:siswas,nisn,' . $siswa->id,
            'nis' => 'required|unique:siswas,nis,' . $siswa->id,
        ]);

        $siswa->update([
            'nama_siswa' => $request->nama,
            'nis' => $request->nis,
            'nisn' => $request->nisn,
        ]);

        $siswa->user->update([
            'name' => $request->nama,
            'email'=> $request->email,
            'nomor_telpon'=> $request->nomor_telpon,

        ]);

        return redirect()->route('siswa.index')->with('success', 'Siswa berhasil diupdate');
    }

    public function destroy(Siswa $siswa)
    {
        $siswa->user->delete();
        $siswa->delete();

        return redirect()->route('siswa.index')->with('success', 'Siswa berhasil dihapus');
    }
}
