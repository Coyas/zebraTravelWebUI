import excss from "../styles/experiencia.module.scss";
import Layout from "../../components/layout";
import Headlogo from "../../components/Headlogo";
import Zebralistras from "../../components/Zebralistras";
import Divisor from "../../components/Divisor";
import Explorebox from "../../components/Explorebox";
import Experencia from "../../components/Experencia";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
// import { getExperiencias } from "../api/expe";
import { useState } from "react";
const qs = require("qs");

const Experiencia = ({ post, contatoDados }) => {
    const { user, loading } = useFetchUser();
    const [display, setDisplay] = useState("none");
    const [next, setNext] = useState(3);
    const { t } = useTranslation("experiencia");

    // console.log("experiencias");
    // console.log(post.data);
    // return null;

    let expi = [];
    post.data.map(
        (value, index) =>
            (expi[index] = (
                <Experencia
                    key={index}
                    dados={value.attributes}
                    type={index > 5 ? display : " "}
                />
            ))
    );

    const showmore = () => {
        alert(display);
        setDisplay(" ");
    };

    return (
        <Layout user={user}>
            <Head>
                <title>{t("expe")} - Zebra Travel Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>
            <Zebralistras />

            <Headlogo marginHead=" " contatoDados={contatoDados} />

            <Divisor title={t("expTu")} voltar="false" sobre={t("exp")} />

            <section className="container">
                <div className="columns is-desktop">
                    <div className={"column " + excss.col}>
                        <Explorebox />
                    </div>
                    <div className="column">{expi}</div>
                </div>
                <p className={excss.btnShowmore}>
                    <a
                        onClick={showmore}
                        className={"button " + excss.showmore}
                    >
                        {t("show")}
                    </a>
                </p>
            </section>
        </Layout>
    );
};

// Experiencia.getInitialProps = async () => {
//     const obj = { namespacesRequired: ["experiencia", "footer", "navbar"] };

//     return obj;
// };

// This function gets called at build time
/*export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await getExperiencias(-1); // -1 = todos as experiencias
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
        paths /*: [{ params: { id: "1" } }, { params: { id: "2" } }],* /,
        fallback: false
    };
}*/

// This also gets called at build time
export async function getStaticProps({ params, locale }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    // const res = await getExperiencias(-1); // -1 = todos as experiencias
    // const exp = await res.json();
    // console.log(res);
    // console.log(exp);

    const query = qs.stringify(
        {
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    const url = `${process.env.API_BASE_URL}/experiencias?${query}`;

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const exp = await res.json();

    const url2 = `${process.env.API_BASE_URL}/contacto`;

    const response2 = await fetch(url2, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response post");
    // console.log(response);
    const contatoDados = await response2.json();

    // Pass post data to the page via props
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "experiencia",
                "footer",
                "navbar"
            ])),
            post: exp,
            contatoDados
        }
    };
}

export default Experiencia;
