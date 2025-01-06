import { useState } from 'react';

export default function NavbarLinkButton({...props}: {link: string, text: string, colors: any}) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <a href={props.link}>
            <button className={`text-xl border border-solid rounded p-5 m-5`}
            style={{color: props.colors.text_color, borderColor: isHover ? props.colors.text_color : props.colors.frame_color}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {props.text}
            </button>
        </a>
    );
}