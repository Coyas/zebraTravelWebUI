import poscss from "../styles/post.module.scss";
import Layout from "../../components/layout";
import Headlogo from "../../components/Headlogo";
import Link from "next/link";
import Zebralistras from "../../components/Zebralistras";
import Divisor from "../../components/Divisor";
import Postlist from "../../components/Post";
import { withTranslation } from "../../i18n";

const Post = ({ t }) => {
    return (
        <>
            <Layout>
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
                                <p>June 2, 2017</p>
                                <Link
                                    href="/post/[id]"
                                    as={`/post/test-de-title`}
                                >
                                    <a>
                                        <h1 className="subtitle">
                                            Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui
                                            officia
                                        </h1>
                                    </a>
                                </Link>
                                <div className={poscss.news}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisifwcing elit, sed do eiusmod Culpa qui
                                    officia deserunt mollit anim id est laborum.
                                    Sed ut perspiciatis unde tempor incididunt
                                    ut labore et dolore roipi magna aliqua. Ut
                                    enim ad minim omnis iste natus error sit
                                    voluptartem accusantium doloremque
                                    laudantium, veeniam, quis nostruklad
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea totam rem aperiam, eaque ipsa quae ab
                                    illo inventore veritatis et quasi ropeior
                                    commodo consequat. Duis aute irure dolor in
                                    reprehenderit in tufpoy voluptate architecto
                                    beatae vitae dicta sunt explicabo. velit
                                    esse cillum dolore eu fugiat nulla
                                    parieratur. Excepteur sint. LOREM IP...
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className={"container " + poscss.blogs}>
                    <div className="columns  is-desktop">
                        <div
                            className="column is-full"
                            style={{ padding: "0" }}
                        >
                            <Postlist />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

Post.getInitialProps = async () => {
    const obj = { namespacesRequired: ["post", "footer", "navbar"] };

    return obj;
};

export default withTranslation("post")(Post);
