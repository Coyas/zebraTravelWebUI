import expicss from "./index.module.scss";
import Link from "next/link";

const Experencia = () => {
    return (
        <>
            <div className={"box " + expicss.expiri}>
                <div className="columns is-desktop">
                    <div className={"column is-one-third " + expicss.sola}>
                        <figure className={"image " + expicss.img}>
                            <img src="/img/esplanada.png" />
                        </figure>
                    </div>
                    <div className="column">
                        <article className="content">
                            <h1>
                                Nature, History of FOGO and relaxation natural
                                pool
                            </h1>
                            <p>
                                Here you get a stupendous view from the highest
                                point from Cape Verde and get the opportunity to
                                trek to the 2014 crater (Optional). You can find
                                places with extreme hot spots from the Sulfur. A
                                multi-colored...{" "}
                                <span>
                                    <Link
                                        href="/experiencias/[pid]"
                                        as={`/experiencias/test-de-title`}
                                    >
                                        <a>read more</a>
                                    </Link>
                                </span>
                            </p>
                        </article>
                        <div className={expicss.book}>
                            <div className={expicss.Mbook}>
                                <p>from</p>{" "}
                                <p className={expicss.preco}>CVE 11,027</p>{" "}
                                <Link
                                    href="/experiencias/[pid]"
                                    as={`/experiencias/test-de-title`}
                                >
                                    <a className="button">BOOK NOW</a>
                                </Link>
                            </div>
                        </div>
                        <p className={expicss.local}>
                            <span className="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            Fogo Island, Chã das Caldeiras
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Experencia;
