import Footer from "@/Components/Footer";
import GreetingsContainer from "@/Components/GreetingsContainer";
import Navbar from "@/Components/Navbar";
import RandomPokemonSection from "@/Components/RandomPokemonSection";
import TypesList from "@/Components/TypesList";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Test({url, random_pokemon, types}: PageProps<{url: string, random_pokemon: any, types: any}>) {
    console.log(types);
    return (
        <div className="bg-[#3b4cca] text-[#3b4cca] flex flex-col font-pokemon">
            <Navbar url={url}/>
            <Head title="Test" />
            <div className="pt-12" style={{minHeight: "calc(100vh - 160px)"}}>
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
            <Footer/>
        </div>
    );
}