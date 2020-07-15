import excss from "../styles/experiencia.module.scss";
import Layout from "../../components/layout";
import Headlogo from "../../components/Headlogo";
import Zebralistras from "../../components/Zebralistras";
import Divisor from "../../components/Divisor";
import Explorebox from "../../components/Explorebox";
import Experencia from "../../components/Experencia";
import Showmore from "../../components/Showmore";
import { withTranslation } from "../../i18n";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
import { getExperiencias } from "../api/expe";

const Experiencia = ({ t, post }) => {
    const { user, loading } = useFetchUser();

    return (
        <Layout user={user}>
            <Head>
                <title>Experiencias - Zebra Travel Agency</title>
            </Head>
            <Zebralistras />

            <Headlogo marginHead="15%" />

            <Divisor title={t("expTu")} voltar="false" sobre={t("exp")} />

            <section className="container">
                <div className="columns is-desktop">
                    <div className={"column " + excss.col}>
                        <Explorebox />
                    </div>
                    <div className="column">
                        {post &&
                            post.map((value) => <Experencia dados={value} />)}
                        <Showmore />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

// Experiencia.getInitialProps = async () => {
//     const obj = { namespacesRequired: ["experiencia", "footer", "navbar"] };

//     return obj;
// };

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await getExperiencias();
    const posts = await res.json();

    // console.log("expe staticpaths");
    // console.log(posts);

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: `${post.slug}` }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths /*: [{ params: { id: "1" } }, { params: { id: "2" } }],*/,
        fallback: false
    };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const obj = { namespacesRequired: ["experiencia", "footer", "navbar"] };
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await getExperiencias();
    const exp = await res.json();
    // console.log(res);
    // console.log(exp);

    // Pass post data to the page via props
    return { props: { obj, post: exp } };
}

export default withTranslation("experiencia")(Experiencia);
