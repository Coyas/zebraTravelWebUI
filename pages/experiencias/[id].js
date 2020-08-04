import expid from "../styles/expid.module.scss";
import Layout from "../../components/layout";
import Zebralistras from "../../components/Zebralistras";
import Headlogo from "../../components/Headlogo";
import Divisor from "../../components/Divisor";
// import Link from "next/link";
import Like from "../../components/Like";
import Hr from "../../components/Hr";
import Comments from "../../components/Comments";
import BooknowList from "../../components/BooknowList";
import Modal from "react-modal";
import { useState } from "react";
import Galeria from "../../components/Galeria";
import { Link, withTranslation } from "../../i18n";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
import { getExperiencia, getExperiencias } from "../api/expe";
import showdown from "showdown";
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: "0%",
        left: "0%",
        width: "100%",
        backgroundColor: "#a59f92",
        border: "unset",
        height: "100vh",
        zIndex: "10",
        overflowX: "hidden"
    }
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

const Expid = ({ t, expi, expis }) => {
    const [calc, setCalc] = useState(false); // foi calculado o valor total
    const [desponivel, setDesponivel] = useState(false); // ha alguma reserva que se encontra desponivel
    const [valor, setValor] = useState(0); // calculo do valor
    const [what, setWhat] = useState("check"); // qual operacao check ou checkout
    const [cor, setCor] = useState("#ffcb10"); // para operacao check cor é amarelo e para checkout cor é azul
    const [classi, setClassi] = useState("none"); // se calc é false style display:node caso nao display: " "
    const { register, handleSubmit } = useForm(); // formulario handler

    const imagem = expi?.imagens[0]?.url;
    // console.log(expi?.likes);
    // console.log(expi?.likes.length);

    const linguas = expi?.linguas?.split(",");

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(expi?.descricao);
        return { __html: html };
    };

    const { user, loading } = useFetchUser();
    const [ModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        // let navbar = document.getElementsByClassName(".navbar_nav__dIn_x");
        let navbar = document.querySelector(".navbar_nav__dIn_x");
        navbar.classList.add("hide");

        setIsOpen(true);
    }

    function closeModal() {
        let navbar = document.querySelector(".navbar_nav__dIn_x");

        if (navbar.classList.contains("hide")) {
            navbar.classList.remove("hide");
        }

        setIsOpen(false);
    }

    // let res;
    const onSubmit = async (data, e) => {
        //fazer o check
        if (!calc) {
            setValor(expi?.preco_uni * data.number);
            setClassi(" ");
            setCor("#34e0a1");
            setWhat("checkout");
            setCalc(!calc);
            const ok = true;
            setDesponivel(ok);
        } else {
            if (desponivel) {
                // fazer o checkout
                alert("disponivel, checkout feito com sucesso");
            } else {
                // fazer o checkout
                alert("Nao Disponivel");
            }
        }
    };
    const resetValues = () => {
        setValor(0);
        setClassi("none");
        setCor("#ffcb10");
        setWhat("check");
        setCalc(false);
    };

    return (
        <Layout user={user}>
            <Head>
                <title>{expi?.title} - Zebra Travel Agency</title>
            </Head>

            <Zebralistras />

            <Headlogo marginHead="2%" />

            <Divisor title={t("expTu")} voltar="true" sobre={t("exp")} />

            <section className={"container " + expid.expid}>
                <h1>{expi?.title}</h1>
                <p>
                    <span className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </span>
                    {expi?.local}
                </p>
                <div className="columns is-desktop">
                    <div className={"column " + expid.imgbox}>
                        <div className={expid.container2}>
                            <figure className="image">
                                <img
                                    src={`${process.env.API_BASE_URL}${imagem}`}
                                    className={expid.imgs}
                                />
                            </figure>
                            <div className={expid.bottomLeft}>
                                <p>
                                    <Like
                                        title={expi?.title}
                                        id={expi?.id}
                                        likes={expi?.likes.length}
                                    />
                                </p>
                            </div>
                            <div className={expid.topRight}>
                                <Link href="https://www.addtoany.com/share">
                                    <a
                                        className="a2a_dd"
                                        href="https://www.addtoany.com/share"
                                    >
                                        <i className="fas fa-share-alt"></i>
                                    </a>
                                </Link>
                                <script>
                                    var a2a_config = a2a_config || {};
                                    a2a_config.onclick = 1;
                                </script>
                            </div>
                        </div>

                        <button
                            onClick={openModal}
                            className={"button " + expid.plus}
                        >
                            <span className="icon">
                                <i className="fas fa-plus"></i>
                            </span>
                        </button>
                        <Modal
                            isOpen={ModalIsOpen}
                            style={customStyles}
                            contentLabel="Example Modal"
                            onRequestClose={closeModal}
                            shouldCloseOnOverlayClick={false}
                        >
                            <div className="section">
                                <div className="container">
                                    <div className="columns is-mobile ">
                                        <div
                                            className={
                                                "column is-half is-offset-one-quarter is-centered " +
                                                expid.center
                                            }
                                        >
                                            <a
                                                onClick={closeModal}
                                                className={expid.branco}
                                            >
                                                <span className="icon">
                                                    <img src="/img/voltar.png" />
                                                </span>
                                                {t("voltar")}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-mobile">
                                            <Galeria images={expi} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="column">
                        <div className={"box " + expid.boxcheck}>
                            <div className={expid.hr}>
                                <Hr height="2" opacity="1" cor="#6bc1fd" />
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div>
                                        <h1>{t("selet")}</h1>
                                    </div>
                                </div>
                                <div className="column is-one-third">
                                    <div className={expid.boxbo}>
                                        <p className={expid.from}>
                                            {t("from")}
                                        </p>
                                        <p className={expid.preco}>
                                            CVE {expi?.preco_uni}
                                        </p>
                                        <p>
                                            <span>({t("advise")})</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* posivel components */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={"columns " + expid.secun}>
                                    <div className="column">
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input is-success"
                                                type="date"
                                                placeholder="Choose a date"
                                                name="date"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                            <span className="icon is-small is-left Dzindex">
                                                <i className="far fa-calendar-alt"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                onChange={resetValues}
                                                className="input is-success"
                                                type="number"
                                                min="0"
                                                placeholder={t("htrav")}
                                                name="number"
                                                ref={register({
                                                    required: true
                                                })}
                                            />
                                            <span className="icon is-small is-left Dzindex">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: classi }}>
                                    <span className={expid.calcvalor}>
                                        {t("calcval")}
                                    </span>
                                    <span className={expid.valorcalc}>
                                        CVE {valor}
                                    </span>
                                    <a
                                        onClick={resetValues}
                                        class="delete is-medium"
                                        style={{
                                            marginTop: "2%",
                                            float: "right"
                                        }}
                                    ></a>
                                    <h1
                                        style={{
                                            color: cor
                                        }}
                                    >
                                        {desponivel
                                            ? "Disponível"
                                            : "Não disponível"}
                                    </h1>
                                </div>
                                <div className="control">
                                    <button
                                        disabled={!desponivel}
                                        type="submit"
                                        className={"button " + expid.btn}
                                        style={{ backgroundColor: cor }}
                                    >
                                        {t(what)}
                                    </button>
                                </div>
                            </form>
                            {/* ************************ */}
                            <div className={"columns " + expid.icons}>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            {t("distance")}
                                        </div>
                                        <div className={expid.itemc}>
                                            {expi?.distancia} km
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="far fa-image"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            {t("elev")}
                                        </div>
                                        <div className={expid.itemc}>
                                            {expi?.elevacao} m
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="far fa-hourglass"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            {t("dura")}
                                        </div>
                                        <div className={expid.itemc}>
                                            {expi?.duracao} h
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="far fa-user"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            {t("lingua")}
                                        </div>
                                        <div className={expid.itemc}>
                                            {linguas}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"columns is-desktop " + expid.sec2}>
                    <div className="column">
                        <Comments post={expi?.id} id="experiencia" />
                    </div>
                    <div className="column">
                        <div className={expid.Descri}>
                            <h1 className="">{t("wtexp")}</h1>
                            <Hr height="1" opacidade="1" cor="#000000" />
                            <article dangerouslySetInnerHTML={createMarkup()} />
                        </div>

                        <div className={expid.exlist}>
                            <Hr height="1" opacidade="1" cor="#000000" />
                            <BooknowList dados={expis} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
// export async function getServerSideProps({ params }) {
//     // console.log("params");
//     // console.log(params);
// const res = await getExperiencia(params.id);
// const json = await res.json();
// const res2 = await getExperiencias(2);
// const json2 = await res2.json();
// return {
//     props: { expi: json, expis: json2 } // will be passed to the page component as props
// };
// }

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await getExperiencias(100);
    const json = await res.json();

    // console.log("posts staticpaths");
    // console.log(posts);

    // Get the paths we want to pre-render based on posts
    const paths = json.map((expi) => ({
        params: { id: `${expi.slug}` }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths /*: [{ params: { id: "1" } }, { params: { id: "2" } }],*/,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    console.log("params");
    console.log(params);
    const res = await getExperiencia(params.id);
    const json = await res.json();
    const res2 = await getExperiencias(2);
    const json2 = await res2.json();
    return {
        props: { expi: json, expis: json2 } // will be passed to the page component as props
    };
}

export default withTranslation("experiencia")(Expid);
