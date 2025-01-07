import Footer from "@/Components/Footer"
import Navbar from "@/Components/navbar/Navbar"
import { Head } from "@inertiajs/react"

export default function Types({type, colors}: {type: any, colors: any}) {
    console.log(colors);
    return (
        <div className={`flex flex-col font-pokemon`} style={{backgroundColor: colors.bg_color, color: colors.text_color}}>
            <Navbar colors={colors}/>
            <Head title={type.name} />
            <div className="pt-12" style={{minHeight: "calc(100vh - 160px)"}}>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex-col justify-end">
                        <div className="p-6 text-gray-900">
                            {type.name}
                        </div>
                    </div>
                </div>
            </div>
            <Footer colors={colors}/>
        </div>
    )
}