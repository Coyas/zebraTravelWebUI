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
//import { Link, withTranslation } from "../../i18n";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
// import { getExperiencia, getExperiencias } from "../api/expe";
import showdown from "showdown";
import { useForm } from "react-hook-form";
import Emoji from "a11y-react-emoji";
import Swal from "sweetalert2";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const qs = require("qs");

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

const Expid = ({ expi, expis, contatoDados }) => {
    const { register, handleSubmit } = useForm(); // formulario handler
    const [obj, setDados] = useState({
        calc: false, // foi calculado o valor total?
        desponivel: false, // ha alguma reserva que se encontra desponivel
        valor: 0, // calculo do valor
        what: "check", // qual operacao check ou checkout
        cor: "#ffcb10", // para operacao check cor é amarelo(#ffcb10) e para checkout cor é azul(#34e0a1)
        classi: "none", // se calc é false style display:node caso nao display: " "
        btn: false // abilitar ou desabilitar o botao
    });

    const { t } = useTranslation("experiencia");

    // console.log("expi");
    // console.log(expi.data.attributes.imagens.data[0].attributes.url);

    // console.log("expis");
    // console.log(expis);

    // return null;

    const imagem = expi?.data.attributes.imagens.data[0].attributes.url;
    // console.log(expis);
    // console.log(expi?.likes.length);

    const linguas = expi?.data.attributes.linguas?.split(",");

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(expi?.data.attributes.descricao);
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

    // pegar a disponibilidade das experiencias
    const ok = false;
    // let res;
    const onSubmit = async (data, e) => {
        //fazer o check
        if (!obj.calc) {
            setDados({
                ...obj,
                valor: expi?.preco_uni * data.number,
                classi: " ",
                what: "checkout",
                calc: !obj.calc,
                cor: obj.desponivel || ok ? "#34e0a1" : "#ffcb10",
                desponivel: ok,
                btn: ok ? false : true
            });
        } else {
            if (obj.desponivel) {
                // fazer o checkout
                // alert("disponivel, checkout feito com sucesso");
                Swal.fire({
                    title: "disponivel!",
                    text: "checkout feito com sucesso",
                    icon: "success",
                    confirmButtonText: "ok"
                });
            } else {
                // fazer o checkout
                Swal.fire({
                    title: t("yes?"),
                    text: t("tenta"),
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        }
    };
    const resetValues = () => {
        setDados({
            ...obj,
            calc: false,
            desponivel: false,
            valor: 0,
            what: "check",
            cor: "#ffcb10",
            classi: "none",
            btn: false
        });
    };

    return (
        <Layout user={user}>
            <Head>
                <title>
                    {expi?.data.attributes.title} - Zebra Travel Agency
                </title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>

            <Zebralistras />

            <Headlogo marginHead="2%" contatoDados={contatoDados} />

            <Divisor title={t("expTu")} voltar="true" sobre={t("exp")} />

            <section className={"container " + expid?.expid}>
                <h1>{expi?.data.attributes.title}</h1>
                <p>
                    <span className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </span>
                    {expi?.data.attributes.local}
                </p>
                <div className="columns is-desktop">
                    <div className={"column " + expid?.imgbox}>
                        <div className={expid?.container2}>
                            <figure className="image">
                                <img
                                    src={`${imagem}`}
                                    className={expid?.imgs}
                                />
                            </figure>
                            <div className={expid?.bottomLeft}>
                                <p>
                                    <Like
                                        title={expi?.data.attributes.title}
                                        id={expi?.data.attributes.id}
                                        likes={
                                            expi?.data.attributes.likes.length
                                        }
                                    />
                                </p>
                            </div>
                            <div className={expid.topRight}>
                                <a
                                    className="a2a_dd"
                                    href="https://www.addtoany.com/share"
                                >
                                    <i className="fas fa-share-alt"></i>
                                </a>
                                <script>
                                    var a2a_config = a2a_config || {};
                                    a2a_config.onclick = 1;
                                </script>
                            </div>
                            <button
                                onClick={openModal}
                                className={"button " + expid.plus}
                                data-tooltip="Tooltip Text"
                            >
                                <span className="icon">
                                    <i className="fas fa-plus"></i>
                                </span>
                            </button>
                        </div>

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
                                            CVE{" "}
                                            {expi?.data.attributes.preco_uni}
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
                                                {...register("date", {
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
                                                {...register("number", {
                                                    required: true
                                                })}
                                            />
                                            <span className="icon is-small is-left Dzindex">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: obj.classi }}>
                                    <span className={expid.calcvalor}>
                                        {t("calcval")}
                                    </span>
                                    <span className={expid.valorcalc}>
                                        CVE {obj.valor}
                                    </span>
                                    <a
                                        onClick={resetValues}
                                        className="delete is-medium"
                                        style={{
                                            marginTop: "2%",
                                            float: "right"
                                        }}
                                    ></a>
                                    <h1
                                        style={{
                                            color: obj.cor
                                        }}
                                    >
                                        {obj.desponivel ? (
                                            <Emoji
                                                symbol="😁"
                                                label="beaming face with smiling eyes"
                                            />
                                        ) : (
                                            <Emoji
                                                symbol="😵"
                                                label="knocked-out face"
                                            />
                                        )}

                                        {obj.desponivel
                                            ? t("despo")
                                            : t("ndespo")}
                                    </h1>
                                </div>
                                <div className="control">
                                    <button
                                        disabled={obj.btn}
                                        type="submit"
                                        className={"button " + expid.btn}
                                        style={{ backgroundColor: obj.cor }}
                                    >
                                        {t(obj.what)}
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
                                            {expi?.data.attributes.distancia} km
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
                                            {expi?.data.attributes.elevacao} m
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
                                            {expi?.data.attributes.duracao} h
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
                        <Comments post={expi} id="experiencia" />
                    </div>
                    <div className="column">
                        <div className={expid?.Descri}>
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
    // const res = await getExperiencias(100);
    // const json = await res.json();
    const query = qs.stringify(
        {
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    const url = `${process.env.API_BASE_URL}/experiencias?${query}`;

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const json = await res.json();

    console.log("posts staticpaths");
    console.log(json);

    // Get the paths we want to pre-render based on posts
    const paths = json.data.map((expi) => ({
        params: { id: `${expi.attributes.slug}` }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths /*: [{ params: { id: "1" } }, { params: { id: "2" } }],*/,
        fallback: false
    };
}

export async function getStaticProps({ params, locale }) {
    // console.log("params");
    // console.log(params);
    // const res = await getExperiencia(params.id);

    const query = qs.stringify(
        {
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    /**
     * Get experencias by id (on this case by slug)
     */
    const url = `${process.env.API_BASE_URL}/experiencias/${params.id}?${query}`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const json = await res.json();
    // const res2 = await getExperiencias(2);
    // const json2 = await res2.json();

    /**
     * Get all experencias
     */
    const url2 = `${process.env.API_BASE_URL}/experiencias?${query}`;

    const res2 = await fetch(url2, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const json2 = await res2.json();

    /**
     * Get contactos data to aply to pages
     */
    const url3 = `${process.env.API_BASE_URL}/contacto`;

    const res3 = await fetch(url3, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response post");
    // console.log(response);
    const contatoDados = await res3.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "experiencia",
                "footer",
                "navbar"
            ])),
            expi: json,
            expis: json2,
            contatoDados
        } // will be passed to the page component as props
    };
}

export default Expid;
