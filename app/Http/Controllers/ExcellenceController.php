<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExcellenceController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia('excellence');
    }
}
