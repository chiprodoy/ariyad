<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class JenisMataPelajaran extends Model
{
    use HasFactory;

    protected $fillable = ['nama_jenis_mata_pelajaran'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($tahunAjaran) {
            $tahunAjaran->uuid = Str::uuid();
        });
    }
}
