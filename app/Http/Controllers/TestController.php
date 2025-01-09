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
    private $typeColors;

    public function __construct() {
        $this->api = new PokeApi();
        $this->types = $this->api->resourceList('type');
        $this->typeColors = Storage::json('typeColors.json');
    }

    public function show() {
        $randomPokemon = $this->api->pokemon(rand(1, 1026));
        return Inertia::render('Test', [
            'random_pokemon' => json_decode($randomPokemon),
            'types' => json_decode($this->types),
            'colors' => $this->typeColors[0]
        ]);
    }

    public function showType(Request $request) {
        return Inertia::render('Types', [
            'type' => json_decode($this->api->pokemonType($request->id)),
            'colors' => $this->typeColors[$request->id]
        ]);
    }

    public function showPokemon(Request $request) {
        return Inertia::render('PokemonDetails', [
            'pokemon' => json_decode($this->api->pokemon($request->id)),
            'colors' => $this->typeColors[0]
        ]);
    }
}
