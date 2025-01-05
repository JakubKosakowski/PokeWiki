export default function RandomPokemonSection({pokemon}: {pokemon: any}) {
    return (
        <div className="text-black border border-solid border-[#CC0000] rounded w-1/5 flex flex-col align-center p-5 mt-5 bg-white">
            <img src={pokemon.sprites.front_default}/>
            <p className="text-2xl font-bold">Random Pokemon</p>
            <p className="text-xl">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
    )
}