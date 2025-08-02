<?php

use App\Models\Guru;
use App\Models\MataPelajaran;
use App\Models\Siswa;
use App\Models\TahunAjaran;
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
        Schema::create('nilais', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Guru::class);
            $table->foreignIdFor(MataPelajaran::class);
            $table->foreignIdFor(Siswa::class);
            $table->foreignIdFor(TahunAjaran::class);
            $table->double('nh1',null,1,true);
            $table->double('nh2',null,1,true);
            $table->double('nh3',null,1,true);
            $table->double('nh4',null,1,true);
            $table->double('nh5',null,1,true);
            $table->double('nh6',null,1,true);
            $table->double('nh7',null,1,true);
            $table->double('total_nilai_harian',null,1,true);
            $table->double('rata_nilai_harian',null,1,true);
            $table->double('nilai_pas',null,1,true);
            $table->double('nilai_akhir',null,1,true);
            $table->double('nilai_huruf',null,1,true);
            $table->text('capaian_kompetensi');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nilais');
    }
};
