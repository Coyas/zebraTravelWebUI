import Layout from "../components/layout";
import { i18n, withTranslation } from "../i18n.config";
import Head from "next/head";
import { useFetchUser } from "../lib/user";
import indexcss from "./styles/index.module.scss";

const Privacy = ({ t }) => {
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user}>
            <Head>
                <title>Privacy Terms - Zebra Travel Agency</title>
            </Head>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <figure className={indexcss.fig2}>
                            <img src="/img/ZebraListra.svg" />
                        </figure>
                        <Bacontact />
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

export const getStaticProps = async () => {
    const obj = { namespacesRequired: ["common", "footer", "navbar"] };

    return {
        props: {
            obj
        } // will be passed to the page component as props
    };
};

export default withTranslation("common")(Privacy);
