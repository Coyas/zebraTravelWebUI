import sescss from "./styles/servicos.module.scss";
import Layout from "../components/layout";
import Headlogo from "../components/Headlogo";
import { withTranslation } from "../i18n";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import showdown from "showdown";

const Servicos = ({ t, dados }) => {
    const { user, loading } = useFetchUser();
    // console.log("dados");
    // console.log(dados);
    // const res = dados.content.replace(/\n/g, "<br/>");

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(dados?.content);
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
                    height="13rem"
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
                                    src={`${process.env.API_BASE_URL}${dados.imagem.url}`}
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

export async function getServerSideProps(context) {
    const url = `${process.env.API_BASE_URL}/service-text`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response");
    // console.log(response);
    const dados = await response.json();

    const obj = {
        namespacesRequired: ["servico", "footer", "navbar"]
    };

    return {
        props: { dados, obj }
    };
}

export default withTranslation("servico")(Servicos);
