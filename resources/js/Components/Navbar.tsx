import { PageProps } from "@/types";
import { HTMLAttributes } from "react";
import NavbarLinkButton from "./NavbarLinkButton";

export default function Navbar({...props}: {url: string}) {
    console.log(props.url);
    return(
        <nav className="bg-[#ff0000] h-20 flex items-center">
            <img src={props.url} className="h-20 m-5"/>
            <ul className="flex">
                <li><NavbarLinkButton link="/test" text="Home"/></li>
                <li><NavbarLinkButton link="/test" text="About"/></li>
                <li><NavbarLinkButton link="/test" text="Test"/></li>
            </ul>
        </nav>
    );
}