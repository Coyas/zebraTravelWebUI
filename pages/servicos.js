import sescss from "./styles/servicos.module.scss";
import Layout from "../components/layout";
import Headlogo from "../components/Headlogo";
import { i18n, withTranslation } from "../i18n";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import showdown from "showdown";
import { useEffect } from "react";
import api from "../lib/api";

const Servicos = ({ t }) => {
    const { user, loading } = useFetchUser();
    const { response, isLoading } = api("/api/service");
    // console.log("dados");
    // console.log(dados);
    // const res = dados.content.replace(/\n/g, "<br/>");
    // console.log(i18n.language);
    // let lang = i18n.language;
    const contentLang = `content_${i18n.language}`;
    // console.log(contentLang);
    // console.log("response");
    // console.log(response?.content_pt);

    let data;
    switch (i18n.language) {
        case "pt": {
            data = response?.content_pt;
            break;
        }
        case "en": {
            data = response?.content_en;
            break;
        }
        case "fr": {
            data = response?.content_fr;
            break;
        }
    }

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(data);
        // console.log(html);
        return { __html: html };
    };

    return (
        <>
            <Layout user={user}>
                <Head>
                    <title>Serviços - Zebra Travel Agency</title>
                </Head>

                <Headlogo
                    height="14rem"
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
                                    <li>{t("t1")}</li>
                                    <li>{t("t2")}</li>
                                    <li>{t("t3")}</li>
                                    <li>{t("t4")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className={"column " + sescss.col2}>
                            <figure className="image">
                                <img src="/img/a.png" />
                            </figure>
                            <figure className="image">
                                <img src="/img/b.png" />
                            </figure>
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

export default withTranslation("servico")(Servicos);
