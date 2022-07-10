import Layout from "../../components/layout";
import pidcss from "../styles/postid.module.scss";
import Headlogo from "../../components/Headlogo";
import Link from "next/link";
import Zebralistras from "../../components/Zebralistras";
import Like from "../../components/Like";
import Comments from "../../components/Comments";
// import { Link, withTranslation } from "../../i18n";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
// import { getPost, getPosts } from "../api/posts";
import showdown from "showdown";
// import { useRouter } from "next/router";
const qs = require("qs");
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Postid = ({ post, contatoDados, posts, linkSocial }) => {
    const { user, loading } = useFetchUser();
    const { t } = useTranslation("post");
    // const router = useRouter();
    // console.log("post idb attributes");
    // console.log(post.data.attributes.conteudo);

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(post?.data.attributes?.conteudo);
        return { __html: html };
    };

    const postid = post?.data?.id || null;

    // console.log("query");
    // console.log(router.query);
    // console.log(post.data.attributes.imageName);
    // console.log(post?.data.attributes.title);
    // console.log(post.data.attributes.imagem.data.attributes.url);

    return (
        <Layout user={user} navbarData={linkSocial} footerData={linkSocial}>
            <Head>
                <title>
                    {post?.data.attributes?.title} - Zebra Travel Agency
                </title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>

            <Zebralistras />
            <Headlogo marginHead="2%" contatoDados={contatoDados} />

            <section className={"container " + pidcss.postdetail}>
                <div className="columns is-variable is-desktop">
                    <div className="column">
                        <article>
                            <h1 className="subtitle">
                                {post?.data.attributes?.title}
                            </h1>

                            <span dangerouslySetInnerHTML={createMarkup()} />
                        </article>
                    </div>
                    <div className={"column " + pidcss.blogImage}>
                        <div className={pidcss.container2}>
                            <img
                                src={`${post?.data.attributes?.imagem.data.attributes?.url}`}
                            />
                            <div className={pidcss.topRight}>
                                <a
                                    className="a2a_dd"
                                    href="https://www.addtoany.com/share"
                                >
                                    <i className="fas fa-share-alt"></i>
                                </a>
                                <script>
                                    var a2a_config = a2a_config || {};
                                    a2a_config.onclick = 1;
                                </script>
                            </div>

                            <div className={pidcss.content2}>
                                {/* <div className="sectags">
                                    <div className="level-right"></div>
                                </div> */}
                                <div className="content">
                                    <div className="columns">
                                        <div
                                            className={"column " + pidcss.preco}
                                        >
                                            {post?.data.attributes?.imageName}
                                        </div>
                                        <div
                                            className={
                                                "column control " +
                                                pidcss.precolocal
                                            }
                                        >
                                            <div className="field is-grouped is-grouped-multiline">
                                                <div className="control">
                                                    <div className="tags has-addons">
                                                        <Link href="ss">
                                                            <a
                                                                className={
                                                                    pidcss.expa
                                                                }
                                                            >
                                                                <span className="margi">
                                                                    89
                                                                </span>
                                                                <span className="icon">
                                                                    <i className="far fa-comment"></i>
                                                                </span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="control">
                                                    <div className="tags has-addons">
                                                        <Like likes="2000000" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={pidcss.liinha}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="columns">
                    <div className="column is-half">
                        <Comments post={post} id="post" />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const url = `${process.env.API_BASE_URL}/posts`;

//     const response = await fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
//     // console.log("paths posts response");
//     // console.log(response);

//     const dados = await response.json();
//     // console.log("posts staticpaths");
//     // console.log(posts);
//     // console.log("paths posts dados");
//     // console.log(dados.attributes.slug);

//     // return null;
//     // dados.data.map((post) => {
//     //     console.log(post.attributes.slug);
//     // });

//     // Get the paths we want to pre-render based on posts
//     const paths = dados.data.map((post) => ({
//         params: { id: `${post.attributes.slug}` }
//     }));

//     // console.log("paths response");
//     // console.log(paths);

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return {
//         paths /*: [{ params: { id: "1" } }, { params: { id: "2" } }],*/,
//         fallback: false
//     };
// }

// export async function getStaticProps({ params, locale }) {
export async function getServerSideProps({ params, locale }) {
    // const res = await getPost(params.id);
    // const json = await res.json();

    // return {
    //     props: { post: json } // will be passed to the page component as props
    // };

    // console.log("params");
    // console.log(params);

    const query = qs.stringify(
        {
            populate: "*"
        },
        {
            encodeValuesOnly: true
        }
    );

    // get post by id=slug
    const url = `${process.env.API_BASE_URL}/posts/${params.id}?${query}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const dadus = await response.json();

    // console.log("dadus");
    // console.log(dadus);

    // get data from contactos
    const url3 = `${process.env.API_BASE_URL}/contacto`;
    const response3 = await fetch(url3, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const contatoDados = await response3.json();

    // get all comentarios from posts
    const url2 = `${process.env.API_BASE_URL}/posts?${query}`;
    const response2 = await fetch(url2, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const posts = await response2.json();

    // console.log("params response");
    // console.log(response);
    // console.log("params dados");
    // console.log(dadus);

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
            post: dadus, // get post by id=slug
            contatoDados, // contactos
            posts, //all posts data
            linkSocial: rsocial_data //dados sobre os links das redes sociais
        }
    };
}

export default Postid;
