import poscss from "../styles/post.module.scss";
import Layout from "../../components/layout";
import Headlogo from "../../components/Headlogo";
import Link from "next/link";
import Zebralistras from "../../components/Zebralistras";
import Divisor from "../../components/Divisor";
import Postlist from "../../components/Post";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
// import api from "../../lib/api";
const qs = require("qs");

const Post = ({ posts, contatoDados, linkSocial }) => {
    const { user, loading } = useFetchUser();
    // const { response, error, isLoading } = api("/api/postis");
    const { t } = useTranslation("post");

    // let dad = {};
    // if (!isLoading) {
    // console.log("posts response");
    // console.log(posts.data);

    // return null;

    /**
     * O primeiro objecto do post
     *
     * sera usado como post exibicional
     */
    let dad = {
        id: posts.data[0].id,
        title: posts.data[0].attributes.title,
        slug: posts.data[0].attributes.slug,
        conteudo: posts.data[0].attributes.conteudo.substring(0, 661),
        created_at: posts.data[0].attributes.created_at
    };
    // }

    return (
        <Layout user={user} navbarData={linkSocial} footerData={linkSocial}>
            <Head>
                <title>Blog - Zebra Travel Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>

            <Zebralistras />

            <Headlogo marginHead="2%" contatoDados={contatoDados} />

            <Divisor
                cores="#ffffff"
                title="Blog"
                voltar="false"
                sobre={t("exp")}
            />

            <section className={"container " + poscss.intro}>
                <div className="columns is-desktop">
                    <div
                        className={
                            "column is-three-fifths is-offset-one-fifth " +
                            poscss.borda
                        }
                    >
                        <article>
                            {/* June 2, 2017 */}
                            <p>{dad?.created_at}</p>
                            <Link href="/post/[id]" as={`/post/${dad?.slug}`}>
                                <a>
                                    <h1 className="subtitle">{dad?.title}</h1>
                                </a>
                            </Link>
                            <div className={poscss.news}>
                                {dad?.conteudo}...
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className={"container " + poscss.blogs}>
                <div className="columns  is-desktop">
                    <div className="column is-full" style={{ padding: "0" }}>
                        <Postlist postlists={posts} />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const getServerSideProps = async ({ locale }) => {
    const query = qs.stringify(
        {
            sort: ["createdAt:desc"],
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    const url = `${process.env.API_BASE_URL}/posts?${query}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response post");
    // console.log(response);
    const posts = await response.json();
    // console.log("dados links api post");
    // console.log(posts.data[0].attributes.imagem);
    // console.log("dados links api post fim");

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
                "post",
                "footer",
                "navbar"
            ])),
            posts,
            contatoDados,
            linkSocial: rsocial_data //dados sobre os links das redes sociais
        } // will be passed to the page component as props
    };
};

export default Post;
