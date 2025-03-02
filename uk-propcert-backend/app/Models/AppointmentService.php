<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentService extends Model
{
    use HasFactory;

    protected $fillable = ['booking_id', 'name', 'description', 'price', 'service_id', 'certifier_id'];

    public function appointment()
    {
        return $this->belongsTo(AppointmentDetail::class, 'booking_id', 'booking_id');
    }
}
