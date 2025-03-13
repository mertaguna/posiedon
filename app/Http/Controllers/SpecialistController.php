<?php

namespace App\Http\Controllers;

use App\Http\Resources\DoctorItemResource;
use App\Http\Resources\SpecialistItemResource;
use App\Models\Doctor;
use App\Models\Specialist;
use Illuminate\Http\Request;

class SpecialistController extends Controller
{
    public function index(Request $request)
    {

        $specialists = Specialist::query()
        ->select('name', 'slug')
        ->latest()
        ->fastPaginate();

        // return SpecialistItemResource::collection($specialists);
        return inertia('specialist/index', [
            'specialists' => SpecialistItemResource::collection($specialists),
        ]);

    }


    public function show (Specialist $specialist){
        $doctors = Doctor::query()
            ->orWhereBelongsTo($specialist)
            ->select('name', 'picture', 'specialist_id', 'id')
            ->latest()
            ->fastPaginate(9);
        // return DoctorItemResource::collection($doctors);
        return inertia('specialist/show',[
            'specialist' => $specialist,
            'doctors' => DoctorItemResource::collection($doctors),
        ]);
    }
}
