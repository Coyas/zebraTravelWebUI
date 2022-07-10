import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Zebralistras from "../components/Zebralistras";
import Headlogo from "../components/Headlogo";
const qs = require("qs");

const Sobreus = ({ contatoDados, linkSocial }) => {
    const { user, loading } = useFetchUser();
    const { t } = useTranslation("common");

    return (
        <Layout user={user} navbarData={linkSocial} footerData={linkSocial}>
            <Head>
                <title>Zebra Travel Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>
            <Zebralistras />

            <Headlogo marginHead=" " contatoDados={contatoDados} />
            <p>SobreUs</p>
        </Layout>
    );
};

// export const getStaticProps = async ({ locale }) => {
export const getServerSideProps = async ({ locale }) => {
    const query = qs.stringify(
        {
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    //const obj = { namespacesRequired: ["common", "footer", "navbar"] };
    /*const res = await getExperiencias(2); //limite = 2
    const exp = await res.json();

    const res2 = await dimages();
    const img = await res2.json();*/
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

export default Sobreus;
