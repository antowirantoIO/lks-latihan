<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;

    protected $fillable = [
        'choise_id',
        'user_id',
        'poll_id',
        'division_id'
    ];

    public function user() {
        return $this->hasOne(User::class);
    }

    public function poll() {
        return $this->hasOne(Poll::class);
    }

    public function division() {
        return $this->hasOne(Division::class, 'id', 'division_id');
    }

    public function choice(){
        return $this->hasOne(Choise::class, 'id', 'choise_id');
    }
}
