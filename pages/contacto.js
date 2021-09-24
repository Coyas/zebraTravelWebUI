import css from "./styles/contacto.module.scss";
import Layout from "../components/layout";
import ContactForm from "../components/Contact";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import Link from "next/link";
import Zebralistras from "../components/Zebralistras";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
// import api from "../lib/api";

const Contacto = ({ dados }) => {
    const { user, loading } = useFetchUser();
    const { t } = useTranslation("contacto");
    // const { response } = api("/api/contato");

    // console.log("dados");
    // console.log(dados);

    // remove todos os espaços contidos no numero
    const phone = dados?.phone.replace(/ /g, "");

    return (
        <Layout user={user}>
            <Head>
                <title>Contatos - Zebra Travel Agency</title>
            </Head>

            <section className={"container " + css.cont}>
                <div className={css.boxi}>
                    <Link href="/">
                        <a>
                            <figure className="image">
                                <img src="/img/zebralogo3.svg" />
                            </figure>
                        </a>
                    </Link>
                </div>
            </section>

            <Zebralistras />

            <section className={"container " + css.contTitle}>
                <h1 className="title">{t("contact")}</h1>
                <h2 className="subtitle">
                    <p>
                        <a href={"tel:00238" + phone}>+|238| {dados?.phone}</a>
                    </p>
                    <p>
                        <a href={"mailto:" + dados?.email}>{dados?.email}</a>
                    </p>
                </h2>
            </section>
            <section className={"container " + css.map}>
                <div className="columns is-desktop">
                    <div className="column">
                        <iframe src={dados?.MapPosition}></iframe>
                    </div>
                    <div className="column">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

// Contacto.getInitialProps = async () => {
//     const obj = { namespacesRequired: ["contacto", "footer", "navbar"] };

//     return obj;
// };
export async function getServerSideProps(context, { locale }) {
    const url = `${process.env.API_BASE_URL}/contactos`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response");
    // console.log(response);
    const dados = await response.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "contacto",
                "footer",
                "navbar"
            ])),
            dados
        }
    };
}

export default withTranslation("contacto")(Contacto);
