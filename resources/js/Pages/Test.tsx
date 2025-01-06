import Footer from "@/Components/Footer";
import GreetingsContainer from "@/Components/GreetingsContainer";
import Navbar from "@/Components/Navbar";
import RandomPokemonSection from "@/Components/RandomPokemonSection";
import TypesList from "@/Components/TypesList";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Test({random_pokemon, types, colors}: PageProps<{random_pokemon: any, types: any, colors: any}>) {
    console.log(types);
    return (
        <div className="flex flex-col font-pokemon" style={{backgroundColor: colors.bg_color}}>
            <Navbar colors={colors}/>
            <Head title="Test" />
            <div className="pt-12" style={{minHeight: "calc(100vh - 100px)"}}>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex-col justify-end">
                        <div className="p-6 text-gray-900">
                            Test content
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <GreetingsContainer/>
                        <RandomPokemonSection pokemon={random_pokemon}/>
                    </div>
                    <TypesList types={types}/>
                </div>
            </div>
            <Footer colors={colors}/>
        </div>
    );
}