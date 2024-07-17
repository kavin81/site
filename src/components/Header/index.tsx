import { siteConfig } from "../../site.config";
import "./styles.css";


interface HeaderProps {
    props: { name: string; link: string }[];
}


function Header({ props }: HeaderProps) {
    return (
        <header>
            <a href="/" className="logo"><h3>{siteConfig.author.toLowerCase()}</h3></a>
            <nav>
                {props.map((link) => (
                    <a
                        key={link.name}
                        href={link.link}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}

export default Header;
