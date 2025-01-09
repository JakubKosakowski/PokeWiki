import Footer from "@/Components/Footer";
import Navbar from "@/Components/navbar/Navbar";
import PokemonAbilities from "@/Components/pokemon/PokemonAbilities";
import { Head } from "@inertiajs/react";

export default function PokemonDetails({...props}) {
    console.log(props.pokemon);
    return (
        <div className={`flex flex-col font-pokemon`} style={{backgroundColor: props.colors.bg_color, color: props.colors.text_color}}>
            <Navbar colors={props.colors}/>
            <Head title={props.pokemon.name} />
            <div className="pt-12" style={{minHeight: "calc(100vh - 160px)"}}>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex-col justify-end">
                        <div className="p-6 text-gray-900 flex justify-end">
                            <img src={props.pokemon.sprites.front_default} style={{height: "250px", width: "250px"}}/>
                        </div>
                        <PokemonAbilities/>
                    </div>
                </div>
            </div>
            <Footer colors={props.colors}/>
        </div>
    )
}