export default function PokemonAbilities({...props}) {
    console.log(props.abilitiesList);
    return (
        <div className="p-5">
            <p className="text-2xl">Abilities</p>
            <ul>
                {props.abilitiesList.map((ele: any, index: number) => {
                    return (
                    ele.effect_entries.map((e: any) => {
                        return e.language.name == 'en' &&
                        <li>{e.effect}</li>
                    })
                )
                })}
            </ul>
        </div>
    )
}