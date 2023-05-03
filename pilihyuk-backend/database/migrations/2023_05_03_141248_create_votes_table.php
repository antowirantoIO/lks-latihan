<?php

use App\Models\Poll;
use App\Models\User;
use App\Models\Choise;
use App\Models\Division;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('votes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Choise::class)->constrained();
            $table->foreignIdFor(User::class)->constrained();
            $table->foreignIdFor(Poll::class)->constrained();
            $table->foreignIdFor(Division::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('votes');
    }
};
