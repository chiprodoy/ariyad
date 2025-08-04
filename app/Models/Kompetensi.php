<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Kompetensi extends Model
{
    use HasFactory;

    protected $fillable = [
        'mata_pelajaran_id',
        'nilai_min',
        'nilai_max',
        'nilai_huruf',
        'predikat',
        'kompetensi',
    ];

    protected $with = ['mata_pelajaran'];

    public function mata_pelajaran()
    {
        return $this->belongsTo(MataPelajaran::class);
    }
        protected static function boot()
    {
        parent::boot();
        static::creating(function ($kompetensi) {
            $kompetensi->uuid = Str::uuid();
        });
    }

}
