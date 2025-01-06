<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use PokePHP\PokeApi;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    private $api;
    private $types;

    public function __construct() {
        $this->api = new PokeApi();
        $this->types = $this->api->resourceList('type');
    }

    public function show() {
        $randomPokemon = $this->api->pokemon(rand(1, 1026));
        return Inertia::render('Test', [
            'random_pokemon' => json_decode($randomPokemon),
            'types' => json_decode($this->types)
        ]);
    }

    public function showType(Request $request) {
        return Inertia::render('Types', [
            'type' => json_decode($this->api->pokemonType($request->id))
        ]);
    }
}
