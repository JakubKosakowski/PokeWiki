export default function Footer({colors}: {colors: any}) {
    return(
        <footer className="text-xl h-20 flex items-center justify-center" style={{backgroundColor: colors.primary_color, color: colors.text_color}}>
            Jakub Kosakowski. All rights reserved. &copy; 2025
        </footer>
    )
}