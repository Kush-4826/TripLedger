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
        Schema::create('trip_statistics', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trip_id')->constrained()->cascadeOnDelete();
            $table->decimal('actual_total_distance', 10, 2)->nullable();
            $table->decimal('logged_total_distance', 10, 2)->nullable();
            $table->integer('total_days')->default(0);
            $table->decimal('total_expense', 10, 2)->default(0);
            $table->decimal('average_daily_expense', 10, 2)->default(0);
            $table->decimal('fuel_cost_per_km', 10, 2)->default(0);
            $table->decimal('average_daily_distance', 10, 2)->default(0);
            $table->decimal('average_accommodation_cost', 10, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trip_statistics');
    }
};
