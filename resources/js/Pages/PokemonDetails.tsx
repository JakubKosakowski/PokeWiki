import Footer from "@/Components/Footer";
import Navbar from "@/Components/navbar/Navbar";
import PokemonAbilities from "@/Components/pokemon/PokemonAbilities";
import { Head } from "@inertiajs/react";

export default function PokemonDetails({...props}) {
    console.log(props.pokemon);
    return (
        <div className={`flex flex-col font-pokemon`} style={{backgroundColor: props.colors.bg_color}}>
            <Navbar colors={props.colors}/>
            <Head title={props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)} />
            <div className="pt-12" style={{minHeight: "calc(100vh - 160px)"}}>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex-col justify-end" style={{backgroundColor: props.colors.primary_color}}>
                        <div className="p-6 text-gray-900 flex justify-between" style={{color: props.colors.text_color}}>
                            <PokemonAbilities abilitiesList={props.abilitiesList}/>
                            <div className="flex flex-col">
                                <p className="text-4xl">{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</p>
                                <img src={props.pokemon.sprites.front_default} style={{height: "250px", width: "250px"}}/>
                                <div>
                                    <p>Base Stats</p>
                                    <ul>
                                        {props.pokemon.stats.map((ele: any) => {
                                            return (
                                                <li>{ele.stat.name.charAt(0).toUpperCase() + ele.stat.name.slice(1)}: {ele.base_stat}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer colors={props.colors}/>
        </div>
    )
}