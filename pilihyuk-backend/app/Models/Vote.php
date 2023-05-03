<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;

    public function user() {
        return $this->hasOne(User::class);
    }

    public function poll() {
        return $this->hasOne(Poll::class);
    }

    public function division() {
        return $this->hasOne(Division::class);
    }

    public function choices(){
        return $this->hasMany(Choise::class);
    }
}
