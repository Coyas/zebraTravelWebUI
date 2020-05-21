import scss from "./navbar.module.scss";
import Link from "next/link";

const NavBar = () => {
    let icon = <i className="fas fa-bars"></i>;
    // icon = <i className="fas fa-times"></i>;
    const siclass = scss.active;

    const handleClick = () => {
        alert("abrir o menu");
    };

    return (
        <>
            <nav className={scss.nav}>
                <div className={scss.item}></div>
                <div className={scss.item}>
                    <Link href="/experiencias">
                        <a>
                            Experiencias <i className="fas fa-chevron-down"></i>
                        </a>
                    </Link>
                </div>
                <div className={scss.item}>
                    <Link href="/servicos">
                        <a>Servicos</a>
                    </Link>
                </div>
                <div className={scss.item}>
                    <Link href="/post">
                        <a>Blog</a>
                    </Link>
                </div>
                <div className={scss.item}>
                    <Link href="/contacto">
                        <a>Contatos</a>
                    </Link>
                </div>
                <div className={scss.item}></div>
                <div className={scss.item + " " + siclass}>
                    <Link href="/">
                        <a onClick={handleClick}>{icon}</a>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
