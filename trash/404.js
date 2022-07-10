import Link from "next/link";
import Layout from "../components/layout";
import notcss from "./styles/a404.module.scss";
import Headlogo from "../components/Headlogo";
import Zebralistras from "../components/Zebralistras";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const qs = require("qs");

const NotFound404 = ({ contatoDados, linkSocial }) => {
    const { user, loading } = useFetchUser();
    const { t } = useTranslation("common");
    return (
        <>
            <Layout user={user} navbarData={linkSocial} footerData={linkSocial}>
                <Head>
                    <title>404 - Zebra Travel Agency</title>
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href="/zebraicon.png"
                    ></link>
                </Head>

                <Zebralistras />

                <Headlogo marginHead="2%" contatoDados={contatoDados} />
                <div className={"container " + notcss.fornfor}>
                    <div className="columns">
                        <div
                            className={
                                "column is-half is-offset-one-quarter " +
                                notcss.center
                            }
                        >
                            <h1 className={notcss.zero}>404</h1>
                            <h1 className={notcss.tite}>{t("p404")}</h1>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export const getServerSideProps = async ({ locale }) => {
    const query = qs.stringify(
        {
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    const url3 = `${process.env.API_BASE_URL}/contacto`;
    const response3 = await fetch(url3, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const contatoDados = await response3.json();

    /**
     * Get dados para link de redes sociais
     */
    const urlRsociais = `${process.env.API_BASE_URL}/links-social?${query}`;
    const rsocial_res = await fetch(urlRsociais, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    // console.log("api response");
    // console.log(response);
    const rsocial_data = await rsocial_res.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer",
                "navbar"
            ])),
            contatoDados,
            linkSocial: rsocial_data //dados sobre os links das redes sociais
        } // will be passed to the page component as props
    };
};

export default NotFound404;
