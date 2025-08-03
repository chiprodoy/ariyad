<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Sekolah extends Model
{
    use HasFactory;
    protected $fillable = ['uuid', 'nama_sekolah', 'alamat_sekolah', 'npsn'];


    public function gurus()
    {
        return $this->hasMany(Guru::class);
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($sekolah) {
            $sekolah->uuid = Str::uuid();
        });
    }
}
