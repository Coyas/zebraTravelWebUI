import Layout from "../components/layout";
import indexcss from "./styles/index.module.scss";
import Divisor from "../components/Divisor";
import Link from "next/link";
import Testemunhas from "../components/Testemunho";

const Home = () => {
    return (
        <>
            <Layout>
                <div className="container">
                    <div class="columns">
                        <div class="column">
                            <figure className={indexcss.fig2}>
                                <img src="/img/ZebraListra.svg" />
                            </figure>
                            <div className={indexcss.it}>
                                <div className={indexcss.boxAdd}>
                                    +|238| 281 33 73
                                    <br />
                                    info@zebratravel.net
                                </div>
                            </div>
                            <div>
                                <figure>
                                    <img src="/img/Zebralogo.svg" />
                                </figure>
                            </div>
                            <p className={indexcss.txt}>
                                Alojamento e<br />
                                experiências
                                <br />
                                turísticas em
                                <br />
                                Cabo Verde
                            </p>
                            <p className={indexcss.sobre}>
                                <a>
                                    <span>
                                        <img src="/img/flexa.svg" />
                                    </span>
                                    SOBRE NÓS
                                </a>
                            </p>
                            <figure className={indexcss.fig}>
                                <img src="/img/ZebraListra.svg" />
                            </figure>
                        </div>
                        <div className={indexcss.coluna}></div>
                        <div class="column">
                            <figure className="image">
                                <img src="/img/a.png" />
                            </figure>
                        </div>
                    </div>
                </div>
                <Divisor title="Experiências Turísticas" cores="#000000" />
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className={indexcss.container2}>
                                <img src="/img/esplanada.png" />
                                <div class={indexcss.topRight}>
                                    <Link href="">
                                        <a>
                                            <i className="fas fa-share-alt"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className={indexcss.topLeft}>
                                    <div className={indexcss.a1}>01</div>
                                    <div className={indexcss.traco}></div>
                                    <div className={indexcss.a2}>02</div>
                                    <div
                                        className={"container " + indexcss.padd}
                                    >
                                        <div className={indexcss.expTxt}>
                                            Nature, History of
                                            <br />
                                            <span>FOGO</span> and relaxation
                                            <br />
                                            natural pool
                                        </div>
                                        <Link href="ssq">
                                            <a
                                                className={
                                                    "button is-warning bold " +
                                                    indexcss.fixbutton
                                                }
                                            >
                                                BOOK NOW
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className={indexcss.content2}>
                                    <div className="sectags">
                                        <div className="level-right">
                                            <div className="field is-grouped is-grouped-multiline">
                                                <div className="control">
                                                    <div className="tags has-addons">
                                                        <Link href="ss">
                                                            <a
                                                                className={
                                                                    indexcss.expa
                                                                }
                                                            >
                                                                <span className="margi">
                                                                    89
                                                                </span>
                                                                <span className="icon">
                                                                    <i className="far fa-comment"></i>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div class="control">
                                                    <div class="tags has-addons">
                                                        <Link href="sss">
                                                            <a
                                                                className={
                                                                    indexcss.expa
                                                                }
                                                            >
                                                                <span className="margi">
                                                                    124k
                                                                </span>
                                                                <span className="icon">
                                                                    <i className="far fa-heart"></i>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>from</p>
                                    <div className="content">
                                        <div className="columns">
                                            <div
                                                className={
                                                    "column " + indexcss.preco
                                                }
                                            >
                                                CVE 11,027
                                            </div>
                                            <div
                                                className={
                                                    "column control " +
                                                    indexcss.precolocal
                                                }
                                            >
                                                <span className="icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                                Fogo Island, Chã das Caldeiras
                                            </div>
                                        </div>
                                        <div className={indexcss.liinha}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={indexcss.coluna2}></div>
                        <div className="column">
                            <div
                                className={
                                    indexcss.container2 +
                                    " " +
                                    indexcss.baipadir
                                }
                            >
                                <img src="/img/praia.png" />
                                <div class={indexcss.topRight}>
                                    <Link href="">
                                        <a>
                                            <i className="fas fa-share-alt"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div class={indexcss.topLeft}>
                                    <div className={indexcss.a1}>03</div>
                                    <div className={indexcss.traco}></div>
                                    <div className={indexcss.a2}>04</div>
                                    <div
                                        className={"container " + indexcss.padd}
                                    >
                                        <div className={indexcss.expTxt}>
                                            Ilha da semana
                                            <br /> navegando
                                            <br /> cabo Verde
                                        </div>
                                        <Link href="ssq">
                                            <a
                                                className={
                                                    "button is-warning bold " +
                                                    indexcss.fixbutton
                                                }
                                            >
                                                BOOK NOW
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className={indexcss.content2}>
                                    <div className="sectags">
                                        <div className="level-right">
                                            <div className="field is-grouped is-grouped-multiline">
                                                <div className="control">
                                                    <div className="tags has-addons">
                                                        <Link href="ss">
                                                            <a
                                                                className={
                                                                    indexcss.expa
                                                                }
                                                            >
                                                                <span className="margi">
                                                                    256
                                                                </span>
                                                                <span className="icon">
                                                                    <i className="far fa-comment"></i>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="control">
                                                    <div className="tags has-addons">
                                                        <Link href="sss">
                                                            <a
                                                                className={
                                                                    indexcss.expa
                                                                }
                                                            >
                                                                <span className="margi">
                                                                    500k
                                                                </span>
                                                                <span className="icon">
                                                                    <i className="far fa-heart"></i>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>from</p>
                                    <div className="content">
                                        <div className="columns">
                                            <div
                                                className={
                                                    "column " + indexcss.preco
                                                }
                                            >
                                                CVE 10,027
                                            </div>
                                            <div
                                                className={
                                                    "column control " +
                                                    indexcss.precolocal
                                                }
                                            >
                                                <span className="icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                                São Vicente Island, Mindelo
                                            </div>
                                        </div>
                                        <div className={indexcss.liinha}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={indexcss.coluna3}></div>
                </div>

                <div className="container margintop">
                    <div className="box">
                        <Testemunhas />
                    </div>
                </div>

                <Divisor
                    title="Alojamento"
                    sutitle="Zebra Hotels"
                    cores="#000000"
                />
            </Layout>
        </>
    );
};

export default Home;
