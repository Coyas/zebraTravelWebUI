import Link from "next/link";
import Layout from "../components/layout";
import notcss from "./styles/a404.module.scss";
import Headlogo from "../components/Headlogo";
import Zebralistras from "../components/Zebralistras";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const NotFound404 = ({ contatoDados }) => {
    const { user, loading } = useFetchUser();
    const { t } = useTranslation("common");
    return (
        <>
            <Layout user={user}>
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

export async function getServerSideProps({ locale }) {
    const url3 = `${process.env.API_BASE_URL}/contacto`;
    const response3 = await fetch(url3, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const contatoDados = await response3.json();

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
}

export default NotFound404;
