<?php

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
        Schema::create('trip_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trip_id')->constrained()->cascadeOnDelete();
            $table->date('date');
            $table->integer('day_number')->nullable();
            $table->string('start_location')->nullable();
            $table->string('end_location')->nullable();
            $table->integer('distance_ridden')->nullable();
            $table->decimal('fuel_filled', 10, 2)->nullable();
            $table->text('weather_notes')->nullable();
            $table->string('accommodation_name')->nullable();
            $table->string('accommodation_location')->nullable();
            $table->text('diary_entry')->nullable();
            $table->timestamps();

            $table->unique(['trip_id', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trip_logs');
    }
};
