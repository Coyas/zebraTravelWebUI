import expicss from "./index.module.scss";
import Link from "next/link";

const Experencia = (props) => {
    return (
        <>
            <div className={"box " + expicss.expiri}>
                <div className="columns is-desktop">
                    <div className={"column is-one-third " + expicss.sola}>
                        <figure className={"image " + expicss.img}>
                            <img
                                src={`${process.env.API_BASE_URL}${props.dados.imagens[0].url}`}
                            />
                        </figure>
                    </div>
                    <div className="column">
                        <article className="content">
                            <h1>{props.dados?.title}</h1>
                            <p>
                                {props.dados?.descricao.substring(0, 208)}...
                                <span>
                                    <Link
                                        href="/experiencias/[pid]"
                                        as={`/experiencias/${props.dados?.slug}`}
                                    >
                                        <a>read more</a>
                                    </Link>
                                </span>
                            </p>
                        </article>
                        <div className={expicss.book}>
                            <div className={expicss.Mbook}>
                                <p>from</p>{" "}
                                <p className={expicss.preco}>
                                    CVE {props.dados.preco_uni}{" "}
                                </p>{" "}
                                <Link
                                    href="/experiencias/[pid]"
                                    as={`/experiencias/${props.dados?.slug}`}
                                >
                                    <a className="button">BOOK NOW</a>
                                </Link>
                            </div>
                        </div>
                        <p className={expicss.local}>
                            <span className="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            {props.dados?.local}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Experencia;
