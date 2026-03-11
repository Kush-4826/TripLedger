<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $fillable = [
        'trip_log_id',
        'category_id',
        'amount',
        'receipt_image_path',
        'note',
        'expense_time',
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'decimal:2',
            'expense_time' => 'datetime',
        ];
    }

    public function tripLog()
    {
        return $this->belongsTo(TripLog::class);
    }

    public function category()
    {
        return $this->belongsTo(ExpenseCategory::class);
    }

    public function scopeOrderedByTime($query)
    {
        return $query->orderBy('expense_time', 'asc');
    }
}
