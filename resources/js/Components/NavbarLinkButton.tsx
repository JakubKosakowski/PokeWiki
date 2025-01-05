export default function NavbarLinkButton({...props}: {link: string, text: string}) {
    return (
        <a href={props.link}>
            <button className="text-xl text-[#FFDE00] border border-solid border-[#CC0000] hover:border-[#B3A125] rounded p-5 m-5">
            {props.text}
            </button>
        </a>
    );
}