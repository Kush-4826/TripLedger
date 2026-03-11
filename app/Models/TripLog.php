<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripLog extends Model
{
    protected $fillable = [
        'trip_id',
        'date',
        'day_number',
        'start_location',
        'end_location',
        'distance_ridden',
        'fuel_filled',
        'weather_notes',
        'accommodation_name',
        'accommodation_location',
        'diary_entry',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
            'fuel_filled' => 'decimal:2',
        ];
    }

    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }

    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    public function mediaLinks()
    {
        return $this->hasMany(TripMediaLink::class);
    }

    public function scopeOrderedByDate($query)
    {
        return $query->orderBy('date', 'asc');
    }
}
