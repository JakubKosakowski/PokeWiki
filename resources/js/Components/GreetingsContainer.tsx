export default function GreetingsContainer() {
    return (
        <div className="text-black border border-solid border-[#CC0000] bg-white rounded mt-5 mr-5 p-10 w-4/5 flex flex-col">
            <div className="flex justify-center">
                <p className="text-[#FFDE00] text-4xl">Welcome to PokéWiki</p>
            </div>
            <div className="p-5 text-xl">
                <article>Hey, Trainer!
                You’ve entered the Pokémon Hall of Knowledge! Here, every page is a Poké Ball packed with wisdom. Browse through the wilds of Pokémon lore, legendary battles, and more. Are you ready to embark on your next Pokédex-filling adventure? Let’s go!</article>
            </div>
        </div>
    );
}