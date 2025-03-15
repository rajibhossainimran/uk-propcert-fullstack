<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppointmentService extends Model
{
    use HasFactory;

    protected $table = 'appointment_services'; 

    protected $fillable = [
        'booking_id',
        'name', 
        'description', 
        'price', 
        'service_id', 
        'certifier',
        'issued',
        'expire',
        'status',
        'order_status',
        'certificate',
        'certificate_img', 
        'submit_date'
    ];
}
