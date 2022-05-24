import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useFetchUser } from "../lib/user";
import indexcss from "./styles/index.module.scss";
import Bacontact from "../components/Bacontact";
import Divisor from "../components/Divisor";

const Privacy = ({ contatoDados }) => {
    const { t } = useTranslation("common");
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user}>
            <Head>
                <title>Privacy Terms - Zebra Travel Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <figure className={indexcss.fig2}>
                            <img src="/img/ZebraListra.svg" />
                        </figure>
                        <Bacontact contatoDados={contatoDados} />
                        <div className={indexcss.logo}>
                            <figure>
                                <img src="" />
                            </figure>
                        </div>
                        <p className={indexcss.txt}>Termos de Pivacidade</p>
                        <p className={indexcss.sobre}>
                            <a>
                                <span>
                                    <img src="/img/flexa.svg" />
                                </span>
                                {t("nos")}
                            </a>
                        </p>
                        <figure className={indexcss.fig}>
                            <img src="/img/ZebraListra.svg" />
                        </figure>
                    </div>
                    <div className={indexcss.coluna}></div>
                    <div className="column">
                        <figure className="image">
                            <img src="/img/a.png" />
                        </figure>
                    </div>
                </div>
            </div>
            <Divisor
                title={t("exptur")}
                cores="#000000"
                voltar="false"
                sobre={t("nos")}
            />
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => {
    /**
     * Get dados para contactos
     *
     */
    const url3 = `${process.env.API_BASE_URL}/contacto`;

    const response2 = await fetch(url3, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response post");
    // console.log(response);
    const contatoDados = await response2.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer",
                "navbar"
            ])),
            contatoDados
        } // will be passed to the page component as props
    };
};

export default Privacy;
