import expicss from "./index.module.scss";
import Link from "next/link";

const Experencia = (props) => {
    // console.log("props");
    // console.log(props);
    // alert(props.type);
    return (
        <>
            <div
                className={"box " + expicss.expiri}
                style={{ display: props.type }}
            >
                <div className="columns is-desktop">
                    <div className={"column is-one-third " + expicss.sola}>
                        <figure className={"image " + expicss.img}>
                            <img
                                src={`${props.dados.imagens.data[0].attributes.url}`}
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
                                        href={`/experiencias/${props.dados?.slug}`}
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
                                    href={`/experiencias/${props.dados?.slug}`}
                                >
                                    <a className="button">BOOK NOW</a>
                                </Link>
                            </div>
                        </div>
                        <p className={expicss.local}>
                            <span className="icon">
                                <i className="fas fa-map-marker-alt"></i>
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
