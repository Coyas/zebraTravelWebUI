import scss from "./navbar.module.scss";
import Link from "next/link";
import { useState } from "react";
import Hr from "../Hr";

const NavBar = () => {
    const [open, Isopen] = useState(false);

    let siclass;
    let show;
    let icon;
    if (open) {
        siclass = scss.noactive;
        show = "";
        icon = <img src="/img/close.png" />;
    } else {
        show = scss.show;
        siclass = scss.active;
        icon = <img src="/img/bars.png" />;
    }

    const handleClick = () => {
        Isopen(!open);
    };

    return (
        <>
            <nav className={scss.nav}>
                {/* <div className={scss.item}></div> */}
                <div className={scss.item} style={{ marginLeft: "6%" }}>
                    <Link href="/experiencias">
                        <a style={{ width: "128%" }}>
                            Experiencias <i className="fas fa-chevron-down"></i>
                        </a>
                    </Link>
                </div>
                <div className={scss.item} style={{ marginLeft: "6%" }}>
                    <Link href="/servicos">
                        <a>Servicos</a>
                    </Link>
                </div>
                <div className={scss.item} style={{ marginLeft: "6%" }}>
                    <Link href="/post">
                        <a>Blog</a>
                    </Link>
                </div>
                <div className={scss.item} style={{ marginLeft: "15%" }}>
                    <Link href="/contacto">
                        <a>Contatos</a>
                    </Link>
                </div>
                {/* <div className={scss.item}></div> */}
                <div
                    className={scss.item + " " + siclass}
                    onClick={handleClick}
                >
                    {icon}
                </div>
                <div className={scss.dropMenu + " " + show}>
                    <div className={scss.boxcontainer}>
                        <div className={scss.box1}>
                            <span>PT</span>
                            <span>EN</span>
                            <span>FR</span>
                        </div>
                        <div className={scss.box2}>
                            <Link href="/auth/login">
                                <a>
                                    Log in
                                    <span className="icon">
                                        <i className="far fa-user"></i>
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <Hr height="1" opacidade="1" cor="#000000" width="79" />
                    <div className={scss.listMenu}>
                        <ul class="menu-list">
                            <li>
                                <img src="/img/logoCinza.svg" />
                            </li>
                            <li>
                                <Link href="">
                                    <a>Sobre Nós</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Termos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Privacidade</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Minha Conta</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={scss.social}>
                        <div className={scss.caxa}>
                            <a href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
