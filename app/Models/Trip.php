<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'banner_image_path',
        'start_location',
        'destination',
        'return_location',
        'start_date',
        'expected_end_date',
        'actual_end_date',
        'start_odometer',
        'end_odometer',
        'planned_distance',
        'bike_name',
        'status',
        'tips_notes',
    ];

    protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'expected_end_date' => 'date',
            'actual_end_date' => 'date',
        ];
    }

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function days()
    {
        return $this->hasMany(TripDay::class);
    }

    public function logs()
    {
        return $this->hasMany(TripLog::class);
    }

    public function mediaLinks()
    {
        return $this->hasMany(TripMediaLink::class);
    }

    public function statistics()
    {
        return $this->hasOne(TripStatistic::class);
    }

    // Scopes
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopePlanned($query)
    {
        return $query->where('status', 'planned');
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeCancelled($query)
    {
        return $query->where('status', 'cancelled');
    }
}
