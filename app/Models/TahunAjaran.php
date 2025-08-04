<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class TahunAjaran extends Model
{
    use HasFactory;
    protected $fillable = ['tahun', 'semester', 'tgl_mulai', 'tgl_akhir','is_active'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($tahunAjaran) {
            $tahunAjaran->uuid = Str::uuid();
        });
    }
}
