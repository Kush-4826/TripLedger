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
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trip_log_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('expense_categories')->restrictOnDelete();
            $table->decimal('amount', 10, 2);
            $table->string('receipt_image_path')->nullable();
            $table->text('note')->nullable();
            $table->dateTime('expense_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('expenses');
    }
};
