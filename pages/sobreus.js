import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Zebralistras from "../components/Zebralistras";
import Headlogo from "../components/Headlogo";

const Sobreus = () => {
    const { user, loading } = useFetchUser();
    const { t } = useTranslation("common");

    return (
        <Layout user={user}>
            <Head>
                <title>Zebra Travel Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>
            <Zebralistras />

            <Headlogo marginHead=" " />
            <p>SobreUs</p>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => {
    //const obj = { namespacesRequired: ["common", "footer", "navbar"] };
    /*const res = await getExperiencias(2); //limite = 2
    const exp = await res.json();

    const res2 = await dimages();
    const img = await res2.json();*/

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer",
                "navbar"
            ]))
        } // will be passed to the page component as props
    };
};

export default Sobreus;
