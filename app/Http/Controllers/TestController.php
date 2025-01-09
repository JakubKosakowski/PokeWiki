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
            'colors' => $this->typeColors["main"]
        ]);
    }

    public function showType(Request $request) {
        return Inertia::render('Types', [
            'type' => json_decode($this->api->pokemonType($request->name)),
            'colors' => $this->typeColors[$request->name]
        ]);
    }

    public function showPokemon(Request $request) {
        $pokemonData = json_decode($this->api->pokemon($request->id), true);
        $abilitiesList = [];
        foreach($pokemonData["abilities"] as $ability) {
            $abilitiesList[] = json_decode($this->api->ability($ability["ability"]["name"]), true);
        }
        return Inertia::render('PokemonDetails', [
            'pokemon' => $pokemonData,
            'colors' => $this->typeColors[$pokemonData["types"][0]["type"]["name"]],
            'abilitiesList' => $abilitiesList
        ]);
    }
}
