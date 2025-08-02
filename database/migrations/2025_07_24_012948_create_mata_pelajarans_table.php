<?php

use App\Models\JenisMataPelajaran;
use App\Models\KelompokMataPelajaran;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mata_pelajarans', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->string('nama_mata_pelajaran');
            $table->foreignIdFor(KelompokMataPelajaran::class);
            $table->foreignIdFor(JenisMataPelajaran::class);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mata_pelajarans');
    }
};
