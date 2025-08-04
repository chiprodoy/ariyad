<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class KelompokMataPelajaran extends Model
{
    use HasFactory;
        protected $fillable = ['nama_kelompok_mata_pelajaran'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($kelompokMataPelajaran) {
            $kelompokMataPelajaran->uuid = Str::uuid();
        });
    }
}
