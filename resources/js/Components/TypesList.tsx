export default function TypesList() {
    const pokemonTypes = [
        "Normal",
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dragon",
        "Dark",
        "Steel",
        "Fairy"
      ];
    return(
        <div className="w-full mt-5 p-5 border border-solid border-[#CC0000] bg-white rounded flex flex-col">
            <div className="flex justify-center">
                <p className="text-[#B3A125] text-4xl">Pokémon Types</p>
            </div>
            <div className="flex flex-wrap">
                {pokemonTypes.map((type: string) => (
                    <div className="flex flex-col justify-center">
                        <img src={`/storage/icons/${type}_icon_SwSh.png`} key={type} style={{height: '128px', width: '128px'}} className="p-2 mt-5"/>
                        <span className="text-center">{type}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}