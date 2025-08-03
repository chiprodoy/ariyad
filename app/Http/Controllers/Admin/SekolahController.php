<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sekolah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SekolahController extends Controller
{
    public $data;
    public $user;

     public function index()
    {
        $this->data = Sekolah::latest()->get();
        $this->user = Auth::user();
        return Inertia::render('Sekolah/index', get_object_vars($this));
    }

    public function create()
    {
        return Inertia::render('Sekolah/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_sekolah' => 'required|string|max:255',
            'alamat_sekolah' => 'required|string|max:255',
            'npsn' => 'required|string|max:50|unique:sekolahs,npsn',
        ]);

        Sekolah::create($request->all());
        return redirect()->route('sekolah.index')->with('success', 'Sekolah berhasil ditambahkan.');
    }

    public function edit(Sekolah $sekolah)
    {
        return Inertia::render('Sekolah/edit', compact('sekolah'));
    }

    public function update(Request $request, Sekolah $sekolah)
    {
        $request->validate([
            'nama_sekolah' => 'required|string|max:255',
            'alamat_sekolah' => 'required|string|max:255',
            'npsn' => 'required|string|max:50|unique:sekolahs,npsn,' . $sekolah->id,
        ]);

        $sekolah->update($request->all());
        return redirect()->route('sekolah.index')->with('success', 'Sekolah berhasil diperbarui.');
    }

    public function destroy(Sekolah $sekolah)
    {
        $sekolah->delete();
        return redirect()->route('sekolah.index')->with('success', 'Sekolah berhasil dihapus.');
    }
}
