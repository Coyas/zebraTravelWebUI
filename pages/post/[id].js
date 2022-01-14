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
import { getPost, getPosts } from "../api/posts";
import showdown from "showdown";
// import { useRouter } from "next/router";

const Postid = ({ post }) => {
    const { user, loading } = useFetchUser();
    // const router = useRouter();
    // console.log("post id");
    // console.log(post.comentarios);

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(post?.conteudo);
        return { __html: html };
    };

    const postid = post?.id;

    // console.log("query");
    // console.log(router.query);

    return (
        <Layout user={user}>
            <Head>
                <title>{post?.title} - Zebra Travel Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>

            <Zebralistras />
            <Headlogo marginHead="2%" />

            <section className={"container " + pidcss.postdetail}>
                <div className="columns is-variable is-desktop">
                    <div className="column">
                        <article>
                            <h1 className="subtitle">{post?.title}</h1>

                            <span dangerouslySetInnerHTML={createMarkup()} />
                        </article>
                    </div>
                    <div className={"column " + pidcss.blogImage}>
                        <div className={pidcss.container2}>
                            <img
                                src={`${process.env.API_BASE_URL}${post?.imagem.url}`}
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
                                    <div className="level-right">
                                        
                                    </div>
                                </div> */}
                                <div className="content">
                                    <div className="columns">
                                        <div
                                            className={"column " + pidcss.preco}
                                        >
                                            {post?.imageName}
                                        </div>
                                        {/* <div
                                            className={
                                                "column control " +
                                                pidcss.precolocal
                                            }
                                        > */}
                                        {/* <div className="field is-grouped is-grouped-multiline">
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
                                                        <Like />
                                                    </div>
                                                </div>
                                            </div> */}
                                        {/* </div> */}
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
                        <Comments post={postid} id="post" />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await getPosts();
    const posts = await res.json();

    // console.log("posts staticpaths");
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

export async function getStaticProps({ params }) {
    const res = await getPost(params.id);
    const json = await res.json();
    return {
        props: { post: json } // will be passed to the page component as props
    };
}

export default Postid;
