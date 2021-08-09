import Layout from "../components/layout";
import { i18n, withTranslation } from "../i18n";
import Head from "next/head";

const Privacy = ({ t }) => {
    return (
        <Layout user={user}>
            <Head>
                <title>Privacy Terms - Zebra Travel Agency</title>
            </Head>
            <div className="container">
                <div className="columns">terrasystem</div>
            </div>
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

export default withTranslation("common")(Home);
