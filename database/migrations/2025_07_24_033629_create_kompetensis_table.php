<?php

use App\Models\MataPelajaran;
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
        Schema::create('kompetensis', function (Blueprint $table) {
            $table->id();
            $table->uuid();
            $table->foreignIdFor(MataPelajaran::class);
            $table->double('nilai_min',null,1,true);
            $table->double('nilai_max',null,1,true);
            $table->double('nilai_huruf',null,1,true);
            $table->string('predikat');
            $table->text('kompetensi');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kompetensis');
    }
};
