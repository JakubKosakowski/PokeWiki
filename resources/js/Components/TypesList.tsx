export default function TypesList({types}: {types: any}) {
    return(
        <div className="w-full mt-5 p-5 border border-solid border-[#CC0000] bg-white rounded flex flex-col">
            <div className="flex justify-center">
                <p className="text-[#FFDE00] text-4xl">Pokémon Types</p>
            </div>
            <div className="flex flex-wrap">
                {types.results.map((ele: {name: string, url: string}, index: number) => {
                    return index < 18 && 
                    <div className="flex flex-col justify-center" key={index}>
                        <a href={`/types/${ele.name}`}><img src={`/storage/icons/${ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}_icon_SwSh.png`} style={{height: '128px', width: '128px'}} className="p-2 mt-5"/></a>
                        <span className="text-center">{ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}</span>
                    </div>
                })}
            </div>
        </div>
    );
}