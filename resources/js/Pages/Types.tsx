import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import { Head } from "@inertiajs/react"

export default function Types({type}: {type: any}) {
    return (
        <div className="bg-[#3b4cca] text-[#3b4cca] flex flex-col font-pokemon">
            <Navbar/>
            <Head title="Test" />
            <div className="pt-12" style={{minHeight: "calc(100vh - 160px)"}}>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex-col justify-end">
                        <div className="p-6 text-gray-900">
                            {type.name}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}