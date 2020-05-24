import polcss from "./index.module.scss";
import Link from "next/link";

const Postlist = () => {
    return (
        <>
            <div className={polcss.boxfoto}>
                <div className={polcss.item + " " + polcss.item1}>
                    <Link href="">
                        <a>
                            <img src="/img/a.png" />
                        </a>
                    </Link>
                </div>
                <div className={polcss.item + " " + polcss.item2}>
                    <Link href="">
                        <a>
                            <img src="/img/a.png" />
                        </a>
                    </Link>
                </div>
                <div className={polcss.itembox}>
                    <div className={polcss.exbox}>
                        <div className={polcss.inbox}>
                            <p>LOREM IPSUM DOLOR AMET CONSECTETUER</p>
                            <Link href="">
                                <a>Learn More</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={polcss.item + " " + polcss.item3}>
                    <Link href="">
                        <a>
                            <img src="/img/a.png" />
                        </a>
                    </Link>
                </div>
                <div className={polcss.item + " " + polcss.item4}>
                    <Link href="">
                        <a>
                            <img src="/img/a.png" />
                        </a>
                    </Link>
                </div>
                <div className={polcss.item + " " + polcss.item5}>
                    <Link href="">
                        <a>
                            <img src="/img/a.png" />
                        </a>
                    </Link>
                </div>
                <div className={polcss.item + " " + polcss.item7}>
                    <Link href="">
                        <a>
                            <img src="/img/a.png" />
                        </a>
                    </Link>
                </div>
                <div className={polcss.item + " " + polcss.item8}>
                    <Link href="">
                        <a>
                            <img src="/img/a.png" />
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Postlist;
