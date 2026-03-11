<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripDay extends Model
{
    protected $fillable = [
        'trip_id',
        'day_number',
        'date',
        'route_description',
        'planned_distance',
        'planned_budget',
        'itinerary_notes',
        'recommended_places',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
            'planned_budget' => 'decimal:2',
        ];
    }

    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }

    public function scopeOrderedByDate($query)
    {
        return $query->orderBy('date', 'asc');
    }

    public function log()
    {
        return $this->hasOne(TripLog::class, 'trip_id', 'trip_id')->where('date', $this->date);
    }
}
