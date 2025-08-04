<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Guru extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'nip', 'user_id', 'sekolah_id'];

    protected $with = ['user'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function sekolah()
    {
        return $this->belongsTo(Sekolah::class);
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($sekolah) {
            $sekolah->uuid = Str::uuid();
        });
    }
}
