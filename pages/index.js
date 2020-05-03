import Layout from "../components/layout";
import indexcss from "./styles/index.module.scss";
import Divisor from "../components/Divisor";
import Link from "next/link";

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
                <Divisor title="Experiências Turísticas" />
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className={indexcss.container2}>
                                <img src="/img/esplanada.png" />
                                <div class={indexcss.topRight}>
                                    <Link href="">
                                        <a>
                                            <i class="fas fa-share-alt"></i>
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
                                    <h1>Heading</h1>

                                    <p>
                                        Lorem ipsum dolor sit amet, an his etiam
                                        torquatos. Tollit soleat phaedrum te
                                        duo, eum cu recteque expetendis
                                        neglegentur. Cu mentitum maiestatis
                                        persequeris pro, pri ponderum tractatos
                                        ei.
                                    </p>
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
                                            <i class="fas fa-share-alt"></i>
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
                                    <h1>Heading</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, an his etiam
                                        torquatos. Tollit soleat phaedrum te
                                        duo, eum cu recteque expetendis
                                        neglegentur. Cu mentitum maiestatis
                                        persequeris pro, pri ponderum tractatos
                                        ei.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={indexcss.coluna3}></div>
                </div>
            </Layout>
        </>
    );
};

export default Home;
