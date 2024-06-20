<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "students";

    protected $guarded = [];

    protected $casts = [
        'created_at' => 'date:d/m/Y H:i:s',
        'updated_at' => 'date:d/m/Y H:i:s',
        'deleted_at' => 'date:d/m/Y H:i:s',
    ];

    public function scopeFilter($query)
    {
        return $query;
    }

    public static function relations(): array
    {
        return [];
    }

    public static function secureDeleteRelations(): array
    {
        return [];
    }
}
