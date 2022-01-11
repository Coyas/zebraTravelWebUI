import scss from "./navbar.module.scss";
import Link from "next/link";
import { useState } from "react";
import Hr from "../Hr";
import { useTranslation } from "next-i18next";
import { unsetToken } from "../../lib/auth";
import { useUser } from "../../lib/user";
import api from "../../lib/api";
import { useRouter } from "next/router";
//import { i18n } from "../../next-i18next.config";

let isEmpty = (val) => {
    let typeOfVal = typeof val;
    switch (typeOfVal) {
        case "object":
            return val.length == 0 || !Object.keys(val).length;
            break;
        case "string":
            let str = val.trim();
            return str == "" || str == undefined;
            break;
        case "number":
            return val == "";
            break;
        default:
            return val == "" || val == undefined;
    }
};

const NavBar = () => {
    const { t, i18n } = useTranslation("navbar");
    let router = useRouter();
    const [open, Isopen] = useState(false);
    const [active, Isactive] = useState(false);
    // const [scale, setScale] = useState(0.6);
    const { user, loading } = useUser();
    const { response, error, isLoading } = api("/api/links");

    // console.log("router.query:");
    // console.log(isEmpty(router.query));
    let url;
    let uri;
    let redi = null;
    if (isEmpty(router.query)) {
        url = router.pathname;
    } else {
        uri = router.pathname;
        const { id } = router.query;
        url = uri.replace("[id]", id);
        redi = 1;
    }

    let siclass;
    let show;
    let icon;
    const styles = {
        transition: "all 1s ease-out"
    };

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
        Isactive(false);
        Isopen(!open);
        // setScale(scale > 0.6 ? 0.6 : 0.999);
    };

    const logout = () => {
        unsetToken();
        // alert("logout");
    };

    const dropDown = () => {
        Isactive(!active);
    };

    // transition: all 5s ease-in;
    // transform: scale(1.3);

    return (
        <>
            <nav className={scss.nav}>
                {/* <div className={scss.item}></div> */}
                <div className={scss.item} style={{ marginLeft: "6%" }}>
                    <div
                        className={active ? "dropdown is-active" : "dropdown "}
                    >
                        <div className="dropdown-trigger">
                            <button
                                className="button"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                onClick={dropDown}
                                style={{ BackgroudColor: "unset" }}
                            >
                                <span> {t("prod")} </span>
                                <span className="icon is-small">
                                    <i
                                        className="fas fa-angle-down"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </button>
                        </div>
                        <div
                            className="dropdown-menu"
                            id="dropdown-menu"
                            role="menu"
                        >
                            <div className="dropdown-content">
                                <Link href="/experiencias">
                                    <a className="dropdown-item">
                                        {t("exp")}{" "}
                                        {/*<i className="fas fa-chevron-down"></i>*/}
                                    </a>
                                </Link>
                                <hr className="dropdown-divider" />
                                <Link href="/hotel/casacolonial">
                                    <a className="dropdown-item">
                                        Casa Colonial
                                    </a>
                                </Link>
                                <hr className="dropdown-divider" />
                                <Link href="/hotel/casakoening">
                                    <a className="dropdown-item">
                                        Casa Koening
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={scss.item} style={{ marginLeft: "6%" }}>
                    <Link href="/servicos">
                        <a>{t("serv")}</a>
                    </Link>
                </div>
                <div className={scss.item} style={{ marginLeft: "6%" }}>
                    <Link href="/post">
                        <a>Blog</a>
                    </Link>
                </div>
                <div className={scss.item} style={{ marginLeft: "15%" }}>
                    <Link href="/contacto">
                        <a>{t("cont")}</a>
                    </Link>
                </div>
                {/* <div className={scss.item}></div> */}
                <div
                    className={scss.item + " " + siclass}
                    onClick={handleClick}
                >
                    {icon}
                </div>
                <div
                    className={scss.dropMenu + " " + show}
                    style={{
                        ...styles
                    }}
                >
                    <div className={scss.boxcontainer}>
                        <div className={scss.box1}>
                            {router.locales.map((locale) => (
                                <li key={locale}>
                                    <Link href={router.asPath} locale={locale}>
                                        <a
                                            style={{
                                                cursor:
                                                    i18n.language == locale
                                                        ? "unset"
                                                        : " ",
                                                fontWeight:
                                                    i18n.language == locale
                                                        ? "bold"
                                                        : " "
                                            }}
                                        >
                                            {locale}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </div>
                        <div className={scss.box2}>
                            {!loading &&
                                (user ? (
                                    <p>{user}</p>
                                ) : (
                                    <Link
                                        href={`/auth/login?redirect=${redi}&url=${url}`}
                                    >
                                        <a>
                                            Log in
                                            <span className="icon">
                                                <i className="far fa-user"></i>
                                            </span>
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <Hr height="1" opacidade="1" cor="#000000" width="79" />
                    <div className={scss.listMenu}>
                        <ul className="menu-list">
                            <li>
                                <Link href="/">
                                    <a>
                                        <img src="/img/logoCinza.svg" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>{t("term")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>{t("privac")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>{t("nos")}</a>
                                </Link>
                            </li>
                            {!loading &&
                                (user ? (
                                    <>
                                        <li>
                                            <Link href="/myaccount/">
                                                <a>{t("mconta")}</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a onClick={logout}>Logout</a>
                                        </li>
                                    </>
                                ) : (
                                    " "
                                ))}
                        </ul>
                    </div>
                    <div className={scss.social}>
                        <div className={scss.caxa}>
                            <a href={response?.facebook} target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={response?.instagram} target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={response?.youtube} target="_blank">
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
