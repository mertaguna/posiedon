<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(Request $request)
    {
        return inertia('doctor/index', [

        ]);
    }
}
