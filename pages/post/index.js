import poscss from "../styles/post.module.scss";
import Layout from "../../components/layout";
import Headlogo from "../../components/Headlogo";
import Link from "next/link";
import Zebralistras from "../../components/Zebralistras";
import Divisor from "../../components/Divisor";
import Postlist from "../../components/Post";
import { withTranslation } from "../../i18n";
import { useFetchUser } from "../../lib/user";
import Head from "next/head";
import api from "../../lib/api";

const Post = ({ t }) => {
    const { user, loading } = useFetchUser();
    const { response, error, isLoading } = api("/api/postis");

    let dad = {};
    if (!isLoading) {
        // console.log("posts response");
        // console.log(response);
        dad = {
            id: response[0].id,
            title: response[0].title,
            slug: response[0].slug,
            conteudo: response[0].conteudo.substring(0, 661),
            created_at: response[0].created_at
        };
    }

    return (
        <Layout user={user}>
            <Head>
                <title>Blog - Zebra Travel Agency</title>
            </Head>

            <Zebralistras />

            <Headlogo marginHead="2%" />

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
                        <Postlist />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

Post.getInitialProps = async () => {
    const obj = { namespacesRequired: ["post", "footer", "navbar"] };

    return obj;
};

export default withTranslation("post")(Post);
