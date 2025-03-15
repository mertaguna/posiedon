<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorRequest;
use App\Http\Resources\DoctorEditResource;
use App\Http\Resources\DoctorItemResource;
use Illuminate\Support\Facades\Storage;
use App\Models\Doctor;
use App\Models\Schedule;
use App\Models\Specialist;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\Middleware;

class DoctorController extends Controller
{
    public $schedules;
    public $specialists;
    public function __construct()
    {
        $this->schedules = Schedule::select('id', 'day', 'start_time', 'end_time')
            ->get()
            ->map(function ($schedule) {
                $schedule->start_time = \Carbon\Carbon::parse($schedule->start_time)->format('h:i A');
                $schedule->end_time = \Carbon\Carbon::parse($schedule->end_time)->format('h:i A');
                return $schedule;
            });
        $this->specialists = Specialist::select('id', 'name') ->get();
    }

    public static function middleware(): array
    {
        return [
            new Middleware('auth', ['create', 'edit', 'store']),
        ];
    }

    public function table(Request $request)
    {
        $doctors = Doctor::query()
            ->with([
                'schedules' => fn($query) => $query->select('day', 'start_time', 'end_time', 'id'),
                'specialist' => fn($query) => $query->select('name', 'slug', 'id'),
            ])
            ->latest()
            ->fastPaginate(8);

        // return DoctorItemResource::collection($doctors);
        return inertia('doctor/table', [
            'doctors' => DoctorItemResource::collection($doctors)
        ]);
    }

    public function index(Request $request)
    {
        return inertia('doctor/index', [

        ]);
    }

    public function create (){
        return inertia('doctor/create',[
            'schedules' => $this->schedules,
            'specialists' => $this->specialists,
        ]);
    }

    public function store (DoctorRequest $request){
        // dd($request->all());
        $picture = $request->picture;
        $doctor = Doctor::create([
            'name' => $name = $request->name,
            'slug' => $slug= str($name)->slug(),
            'specialist_id' => $request->specialist_id,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('images/doctors', $slug .'.'.$picture->extension()) : null,
        ]);
        // dd($doctor->id);
        $doctor->schedules()->attach($request->schedules);
        return to_route('doctor.table', $doctor);
    }

    public function edit (Doctor $doctor){
        // return DoctorEditResource::make($doctor);
        return inertia('doctor/edit',[
            'doctor' => DoctorEditResource::make($doctor),
            'schedules' => $this->schedules,
            'specialists' => $this->specialists,
        ]);
    }

    public function update (DoctorRequest $request, Doctor $doctor){
        // dd($request->all());
        $picture = $request->picture;
        $doctor->update([
            'name' =>  $request->name,
            'specialist_id' => $request->specialist_id,
            'picture' => $request->hasFile('picture') ? $picture->storeAs('images/doctors', $doctor->slug .'.'.$picture->extension()) : $doctor->picture,
        ]);
        $doctor->schedules()->sync($request->schedules, true);
        return to_route('doctor.table', $doctor);
    }

    public function destroy ( Doctor $doctor){
        // dd($doctor->id);
        if($doctor->picture){
            Storage::delete($doctor->picture);
        }
        $doctor->schedules()->detach();
        $doctor->delete();
        return back();
    }
}
