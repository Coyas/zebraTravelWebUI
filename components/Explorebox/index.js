import excss from "./index.module.scss";
// import Link from "next/link";
import { Link, withTranslation } from "../../i18n";

const Explorebox = ({ t }) => {
    return (
        <>
            <aside className={"menu " + excss.box}>
                <p className="menu-label">{t("expe")}</p>
                <p className={excss.bord}></p>
                <ul className="menu-list">
                    <li>
                        <Link href="">
                            <a>{t("exp1")} (5)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>{t("exp2")} (1)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>{t("exp3")} (2)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>{t("exp4")} (1)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>{t("exp5")} (3)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>{t("exp6")} (4)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>{t("exp7")} (2)</a>
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">{t("time")}</p>
                <p className={excss.bord}></p>
                <ul className="menu-list">
                    <li>
                        <Link href="">
                            <a>1 to 4 hours (1)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>4 hours to 1 day (4)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>1 to 3 days (1)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>3+ days (1)</a>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default withTranslation("experiencia")(Explorebox);
