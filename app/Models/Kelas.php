<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Kelas extends Model
{
    use HasFactory;

    protected $fillable = ['nama_kelas'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($kelas) {
            $kelas->uuid = Str::uuid();
        });
    }
}
