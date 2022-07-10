import Layout from "../../components/layout";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
const qs = require("qs");
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Myaccount = ({ linkSocial }) => {
    const { t } = useTranslation("common");

    const { user, loading } = useFetchUser();

    return (
        <Layout user={user} navbarData={linkSocial} footerData={linkSocial}>
            <Head>
                <title>Home - zebraTravel agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>
            <div>{t("title")}</div>
        </Layout>
    );
};

export async function getServerSideProps({ locale }) {
    const query = qs.stringify(
        {
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "footer",
                "navbar"
            ])),
            linkSocial: rsocial_data //dados sobre os links das redes sociais
        } // will be passed to the page component as props
    };
}

export default Myaccount;
