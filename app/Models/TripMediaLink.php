<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TripMediaLink extends Model
{
    protected $fillable = [
        'trip_id',
        'trip_log_id',
        'url',
        'description',
    ];

    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }

    public function tripLog()
    {
        return $this->belongsTo(TripLog::class);
    }
}
