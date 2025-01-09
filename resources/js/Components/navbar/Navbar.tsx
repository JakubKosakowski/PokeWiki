import { PageProps } from "@/types";
import { HTMLAttributes } from "react";
import NavbarLinkButton from "./NavbarLinkButton";

export default function Navbar({colors}: {colors:any}) {
    return(
        <nav className={`h-20 flex items-center`} style={{backgroundColor: colors.primary_color}}>
            <img src='/storage/pokeball.png' className="h-20 m-5"/>
            <ul className="flex">
                <li><NavbarLinkButton link="/" text="Home" colors={colors}/></li>
                <li><NavbarLinkButton link="/" text="About" colors={colors}/></li>
                <li><NavbarLinkButton link="/" text="Test" colors={colors}/></li>
            </ul>
        </nav>
    );
}