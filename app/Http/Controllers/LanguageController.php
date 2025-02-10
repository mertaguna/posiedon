<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // dd($request->name);
        $request->validate([
            'name' => ['required'],
        ]);

        session(['locale' => $request->name]);

        return back();
    }
}
