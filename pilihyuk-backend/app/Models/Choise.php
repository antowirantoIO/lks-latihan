<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Choise extends Model
{
    use HasFactory;

    protected $fillable = [
        'choise'
    ];

    public function poll(){
        return $this->hasOne(Poll::class);
    }

    public function votes(){
        return $this->hasMany(Vote::class);
    }
}
