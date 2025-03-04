<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'booking_id', 'name', 'email', 'phone',
        'property_address', 'property_details', 'date', 'total_price', 'payment_status','order_status',
    
    ];

    public function services()
    {
        return $this->hasMany(AppointmentService::class, 'booking_id', 'booking_id');
    }
}
