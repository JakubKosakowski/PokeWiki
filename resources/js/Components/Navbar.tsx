import { PageProps } from "@/types";
import { HTMLAttributes } from "react";
import NavbarLinkButton from "./NavbarLinkButton";

export default function Navbar() {
    return(
        <nav className="bg-[#ff0000] h-20 flex items-center">
            <img src='/storage/pokeball.png' className="h-20 m-5"/>
            <ul className="flex">
                <li><NavbarLinkButton link="/test" text="Home"/></li>
                <li><NavbarLinkButton link="/test" text="About"/></li>
                <li><NavbarLinkButton link="/test" text="Test"/></li>
            </ul>
        </nav>
    );
}