<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class MataPelajaran extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_mata_pelajaran',
        'kelompok_mata_pelajaran_id',
        'jenis_mata_pelajaran_id'
    ];

    protected $with = ['kelompokMataPelajaran','jenisMataPelajaran'];
    public function kelompokMataPelajaran()
    {
        return $this->belongsTo(KelompokMataPelajaran::class, 'kelompok_mata_pelajaran_id');
    }

    public function jenisMataPelajaran()
    {
        return $this->belongsTo(JenisMataPelajaran::class);
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($kelompokMataPelajaran) {
            $kelompokMataPelajaran->uuid = Str::uuid();
        });
    }
}
