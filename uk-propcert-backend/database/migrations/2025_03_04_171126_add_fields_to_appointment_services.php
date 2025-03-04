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
    Schema::table('appointment_services', function (Blueprint $table) {
        $table->date('issued')->nullable();
        $table->date('expire')->nullable();
        $table->string('status')->default('pending');
        $table->string('order_status')->default('pending');
        $table->string('certificate')->nullable();
    });
}

public function down(): void
{
    Schema::table('appointment_services', function (Blueprint $table) {
        $table->dropColumn(['issued', 'expire', 'status', 'order_status', 'certificate']);
    });
}
};
