<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripStatistic extends Model
{
    protected $fillable = [
        'trip_id',
        'actual_total_distance',
        'logged_total_distance',
        'total_days',
        'total_expense',
        'average_daily_expense',
        'fuel_cost_per_km',
        'average_daily_distance',
        'average_accommodation_cost',
    ];

    protected function casts(): array
    {
        return [
            'actual_total_distance' => 'decimal:2',
            'logged_total_distance' => 'decimal:2',
            'total_expense' => 'decimal:2',
            'average_daily_expense' => 'decimal:2',
            'fuel_cost_per_km' => 'decimal:2',
            'average_daily_distance' => 'decimal:2',
            'average_accommodation_cost' => 'decimal:2',
        ];
    }

    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }
}
