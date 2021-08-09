import Layout from "../components/layout";
import indexcss from "./styles/index.module.scss";
import Divisor from "../components/Divisor";
import Link from "next/link";
import Testemunhas from "../components/Testemunho";
import Banner from "../components/Banner";
import Bacontact from "../components/Bacontact";
import Like from "../components/Like";
import { i18n, withTranslation } from "../i18n";
import Head from "next/head";
import { useFetchUser } from "../lib/user";
import { getExperiencias } from "../pages/api/expe";

const Home = ({ t, expe }) => {
    const islang = i18n.isInitialized;
    // verificar se ha um user logado
    const { user, loading } = useFetchUser();
    return (
        <Layout user={user}>
            <Head>
                <title>Zebra Travel Agency</title>
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
                                <img src="/img/Zebralogo.svg" />
                            </figure>
                        </div>
                        <p className={indexcss.txt}>{t("title")}</p>
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
            <div className="container">
                <div className="columns">
                    {expe &&
                        expe.map((value, index) => (
                            <React.Fragment key={index}>
                                <div className="column">
                                    <div
                                        className={
                                            index == 0
                                                ? indexcss.container2
                                                : indexcss.container2 +
                                                  " " +
                                                  indexcss.baipadir
                                        }
                                    >
                                        <img
                                            src={`${process.env.API_BASE_URL}${value?.imagens[0].url}`}
                                        />
                                        <div className={indexcss.topRight}>
                                            <a
                                                className="a2a_dd"
                                                href="https://www.addtoany.com/share"
                                            >
                                                <i className="fas fa-share-alt"></i>
                                            </a>
                                            <script>
                                                var a2a_config = a2a_config ||{" "}
                                                {}; a2a_config.onclick = 1;
                                            </script>
                                        </div>
                                        <div className={indexcss.topLeft}>
                                            <div className={indexcss.a1}>
                                                01
                                            </div>
                                            <div
                                                className={indexcss.traco}
                                            ></div>
                                            <div className={indexcss.a2}>
                                                02
                                            </div>
                                            <div
                                                className={
                                                    "container " + indexcss.padd
                                                }
                                            >
                                                <div
                                                    className={indexcss.expTxt}
                                                >
                                                    {value?.title}
                                                    {/* Nature, History of
                                        <br />
                                        <span>FOGO</span> and relaxation
                                        <br />
                                        natural pool */}
                                                </div>
                                                <Link
                                                    href={`/experiencias/${value?.slug}`}
                                                >
                                                    <a
                                                        className={
                                                            "button is-warning bold " +
                                                            indexcss.fixbutton
                                                        }
                                                    >
                                                        BOOK NOW
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={indexcss.content2}>
                                            <div className="sectags">
                                                <div className="level-right">
                                                    <div
                                                        className={
                                                            "field is-grouped is-grouped-multiline " +
                                                            indexcss.space
                                                        }
                                                    >
                                                        <div className="control">
                                                            <div className="tags has-addons">
                                                                <Link
                                                                    href={`/experiencias/${value?.slug}`}
                                                                >
                                                                    <a
                                                                        className={
                                                                            indexcss.expa
                                                                        }
                                                                    >
                                                                        <span className="margi">
                                                                            {
                                                                                value
                                                                                    ?.comentarios
                                                                                    ?.length
                                                                            }
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
                                                                <Like
                                                                    title={
                                                                        value?.title
                                                                    }
                                                                    id={
                                                                        value?.id
                                                                    }
                                                                    likes={
                                                                        value
                                                                            ?.likes
                                                                            .length
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>from</p>
                                            <div className="content">
                                                <div className="columns">
                                                    <div
                                                        className={
                                                            "column " +
                                                            indexcss.preco
                                                        }
                                                    >
                                                        CVE {value?.preco_uni}
                                                    </div>
                                                    <div
                                                        className={
                                                            "column control " +
                                                            indexcss.precolocal
                                                        }
                                                    >
                                                        <span className="icon">
                                                            <i className="fas fa-map-marker-alt"></i>
                                                        </span>
                                                        {value?.local}
                                                    </div>
                                                </div>
                                                <div
                                                    className={indexcss.liinha}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {index == 0 ? (
                                    <div className={indexcss.coluna2}></div>
                                ) : (
                                    ""
                                )}
                            </React.Fragment>
                        ))}
                </div>
                <div className={indexcss.coluna3}></div>
            </div>

            <div className="container margintop">
                <div className="columns">
                    <div className="column">
                        <div className={"box " + indexcss.boxMargin}>
                            <Testemunhas />
                        </div>
                    </div>
                </div>
            </div>

            <Divisor
                title={t("alojamento")}
                sutitle={t("zhot")}
                cores="#000000"
                voltar="false"
                sobre={t("nos")}
            />

            <section className={"content marginbot " + indexcss.verde}>
                <div className="container">
                    <Banner
                        bb="B1"
                        title="The Colonial Guest House"
                        subtitle="Um lugar de descanso e .."
                        body="You can’t fall if you don’t climb. But there’s no
                        joy in living your whole life on the ground. You
                        can’t fall if you don’t climb. But there’s no joy in
                        living your whole life on the ground. You can’t fall
                        if you don’t climb. But there’s no joy in living
                        your whole life on the ground. You can’t fall if you
                        don’t climb. But there’s no joy in living your whole
                        life on the ground. You can’t fall if you don’t
                        climb. But there’s no joy in living your whole life
                        on the ground. You can’t fall if you don’t climb.
                        But there’s no joy in living your whole life on the
                        ground."
                        comment="80k"
                        image="img/b.png"
                    />
                </div>
            </section>

            <section className={"content " + indexcss.castanho2}>
                <div className="container">
                    <Banner
                        bb="B2"
                        title="Casa Colonial Koenig"
                        subtitle="Um lugar de descanso e .."
                        body="You can’t fall if you don’t climb. But there’s no
                            joy in living your whole life on the ground. You
                            can’t fall if you don’t climb. But there’s no joy in
                            living your whole life on the ground. You can’t fall
                            if you don’t climb. But there’s no joy in living
                            your whole life on the ground. You can’t fall if you
                            don’t climb. But there’s no joy in living your whole
                            life on the ground. You can’t fall if you don’t
                            climb. But there’s no joy in living your whole life
                            on the ground. You can’t fall if you don’t climb.
                            But there’s no joy in living your whole life on the
                            ground."
                        comment="20k"
                        image="img/b.png"
                    />
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const obj = { namespacesRequired: ["common", "footer", "navbar"] };
    const res = await getExperiencias(2); //limite = 2
    const exp = await res.json();

    return {
        props: {
            obj,
            expe: exp
        } // will be passed to the page component as props
    };
};

export default withTranslation("common")(Home);
