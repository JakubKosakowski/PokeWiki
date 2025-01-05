<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use PokePHP\PokeApi;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    public function show() {
        $api = new PokeApi();
        $randomPokemon = $api->pokemon(rand(1, 1026));
        return Inertia::render('Test', [
            'url' => Storage::url('pokeball.png'),
            'random_pokemon' => json_decode($randomPokemon)
        ]);
    }
}
