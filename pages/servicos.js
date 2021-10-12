import sescss from "./styles/servicos.module.scss";
import Layout from "../components/layout";
import Headlogo from "../components/Headlogo";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import showdown from "showdown";
import { useEffect } from "react";
import api from "../lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MyCarousel from "../components/MyCarousel";

const Servicos = ({ dados }) => {
    const { t, i18n } = useTranslation("servico");
    const { user, loading } = useFetchUser();
    const { response, isLoading } = api("/api/service");

    let data;
    let title = [];
    let images = [];
    switch (i18n.language) {
        case "pt": {
            data = response?.content_pt;
            dados.forEach((item) => {
                title.push(item.servico_pt);
            });
            dados.forEach((item) => {
                images.push(item.image_pt);
            });
            break;
        }
        case "en": {
            data = response?.content_en;
            dados.forEach((item) => {
                title.push(item.servico_en);
            });
            dados.forEach((item) => {
                images.push(item.image_en);
            });
            break;
        }
        case "fr": {
            data = response?.content_fr;
            dados.forEach((item) => {
                title.push(item.servico_fr);
            });
            dados.forEach((item) => {
                images.push(item.image_fr);
            });
            break;
        }
    }

    console.log("data:");
    console.log(title);
    console.log(images);

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(data);
        return { __html: html };
    };

    return (
        <>
            <Layout user={user}>
                <Head>
                    <title>Serviços - Zebra Travel Agency</title>
                </Head>

                <Headlogo
                    height="18rem"
                    position="absolute"
                    width="27%"
                    top="34%"
                    left="4%"
                    marginTop="7%"
                    marginHead="-2%"
                >
                    <figure
                        // id={sescss.sebanner}
                        className={"image " + sescss.figure}
                    >
                        <img src="/img/a.png" />
                    </figure>
                </Headlogo>
                <section className={"container is-fluid " + sescss.servico}>
                    <div className="columns is-desktop">
                        <div className={"column " + sescss.col}>
                            <div className={sescss.boxPreto}>
                                <h1 className="title">{t("serv")}</h1>
                                <ul>
                                    {title.map((index, value) => (
                                        <li key={value}>{index}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={"column " + sescss.col2}>
                            <MyCarousel slides={images} />

                            {/*<figure className="image">
                                <img src="/img/serv.jpg" />
                            </figure>*/}
                        </div>
                    </div>
                </section>
                <section className={"container " + sescss.detalhes}>
                    <div className="columns is-desktop">
                        <div className={"column " + sescss.arti}>
                            <article dangerouslySetInnerHTML={createMarkup()} />
                        </div>
                        <div className="column">
                            <figure
                                className="image"
                                style={{ width: "105.7%" }}
                            >
                                <img
                                    style={{ height: "100vh" }}
                                    src={`${process.env.API_BASE_URL}${response?.imagem?.url}`}
                                />
                            </figure>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

// Servicos.getInitialProps = (ctx) => {
//     const obj = {
//         namespacesRequired: ["servico", "footer", "navbar"]
//     };

//     return obj;
// };

// export async function getServerSideProps(context) {
//     const url = `${process.env.API_BASE_URL}/servicetext`;

//     const response = await fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     // console.log("api response");
//     // console.log(response);
//     const dados = await response.json();

//     const obj = {
//         namespacesRequired: ["servico", "footer", "navbar"]
//     };

//     return {
//         props: { dados, obj }
//     };
// }

export const getStaticProps = async ({ locale }) => {
    const url = `${process.env.API_BASE_URL}/servicos`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response");
    // console.log(response);
    const dados = await response.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "servico",
                "footer",
                "navbar"
            ])),
            dados
        } // will be passed to the page component as props
    };
};

export default Servicos;
