import scss from "./navbar.module.scss";
import Link from "next/link";

const NavBar = () => {
    /*
     * Estou tendo problemas em definir classes
     * entao por agora irei concatenar classis aqui antes de aplicar
     * */
    // const classi = "navbar-end " + scss.navv;

    return (
        <>
            <nav className={scss.nav}>
                <ul>
                    <li>
                        <Link href="#home">
                            <a>Experiencias</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#news">
                            <a>Servicos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a>Contatos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <a className={scss.active}>
                                <i class="fas fa-bars"></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
