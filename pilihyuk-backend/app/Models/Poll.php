<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Poll extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'deadline',
        'created_by'
    ];

    public function creator(){
        return $this->hasOne(User::class, 'id', 'created_by');
    }

    public function choices(){
        return $this->hasMany(Choise::class);
    }

    public function votes(){
        return $this->hasMany(Vote::class);
    }
}
