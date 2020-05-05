import excss from "./index.module.scss";
import Link from "next/link";

const Explorebox = () => {
    return (
        <>
            <aside className={"menu " + excss.box}>
                <p className="menu-label">Experiências</p>
                <p className={excss.bord}></p>
                <ul className="menu-list">
                    <li>
                        <Link href="">
                            <a>Featured Tours and Tickets (5)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Cruises, Sailing & Water Tours (1)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Cultural & Theme Tours (2)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Day Trips & Excursions (1)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Outdoor Activities (3)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Tours & Sightseeing (4)</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Walking & Biking Tours (2)</a>
                        </Link>
                    </li>
                </ul>
                <p className="menu-label">Duration</p>
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

export default Explorebox;
