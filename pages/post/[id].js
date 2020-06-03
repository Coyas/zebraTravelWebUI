import Layout from "../../components/layout";
import pidcss from "../styles/postid.module.scss";
import Headlogo from "../../components/Headlogo";
import Link from "next/link";
import Zebralistras from "../../components/Zebralistras";
import Like from "../../components/Like";
import Comments from "../../components/Comments";

const Postid = () => {
    return (
        <Layout>
            <Zebralistras />
            <Headlogo marginHead="2%" />

            <section className={"container " + pidcss.postdetail}>
                <div className="columns is-variable is-desktop">
                    <div className="column">
                        <article>
                            <h1 className="subtitle">
                                Excepteur sint occaeuiecat cupidatat.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut ero labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco poriti laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in uienply voluptate
                                velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat
                                norin proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut ero labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco poriti laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in uienply voluptate
                                velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat
                                norin proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut ero labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco poriti laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in uienply voluptate
                                velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat
                                norin proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut ero labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco poriti laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in uienply voluptate
                                velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat
                                norin proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>
                    <div className={"column " + pidcss.blogImage}>
                        <div className={pidcss.container2}>
                            <img src="/img/esplanada.png" />
                            <div className={pidcss.topRight}>
                                <Link href="https://www.addtoany.com/share">
                                    <a
                                        class="a2a_dd"
                                        href="https://www.addtoany.com/share"
                                    >
                                        <i className="fas fa-share-alt"></i>
                                    </a>
                                </Link>
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
                                            Casa Colonial
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
                                                        <Like />
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
                        <Comments />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Postid;
