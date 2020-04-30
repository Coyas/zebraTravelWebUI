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
                <div className={scss.item}></div>
                <div className={scss.item}>
                    <Link href="/experiencia">
                        <a>
                            Experiencias <i class="fas fa-chevron-down"></i>
                        </a>
                    </Link>
                </div>
                <div className={scss.item}>
                    <Link href="/servico">
                        <a>Servicos</a>
                    </Link>
                </div>
                <div className={scss.item}>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </div>
                <div className={scss.item}>
                    <Link href="/contato">
                        <a>Contatos</a>
                    </Link>
                </div>
                <div className={scss.item}></div>
                <div className={scss.item + " " + scss.active}>
                    <Link href="/">
                        <a>
                            <i class="fas fa-bars"></i>
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
