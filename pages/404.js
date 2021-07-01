import Link from "next/link";
import Layout from "../components/layout";
import notcss from "./styles/a404.module.scss";
import Headlogo from "../components/Headlogo";
import Zebralistras from "../components/Zebralistras";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import { withTranslation } from "../i18n";

const NotFound404 = ({ t }) => {
    const { user, loading } = useFetchUser();
    return (
        <>
            <Layout user={user}>
                <Head>
                    <title>404 - Zebra Travel Agency</title>
                </Head>

                <Zebralistras />

                <Headlogo marginHead="2%" />
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

export async function getStaticProps() {
    const obj = { namespacesRequired: ["common"] };

    return {
        props: { obj } // will be passed to the page component as props
    };
}

export default withTranslation("common")(NotFound404);
