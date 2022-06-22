import sescss from "./styles/servicos.module.scss";
import Layout from "../components/layout";
import Headlogo from "../components/Headlogo";
import { useFetchUser } from "../lib/user";
import Head from "next/head";
import showdown from "showdown";
// import { useEffect } from "react";
// import api from "../lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import MyCarousel from "../components/MyCarousel";
const qs = require("qs");

const Servicos = ({ servico, servicetext, contatoDados }) => {
    const servicoarray = servico.data; // make the services dada json
    //dados2.data.attributes.imagem.data.attributes.url
    const response = servicetext.data; // make the servicetext data json
    const imagina = response.attributes.imagem?.data.attributes.url; // imagem estatica do servicetext
    const { t, i18n } = useTranslation("servico");
    const { user, loading } = useFetchUser();
    // const { response, isLoading } = api("/api/service");
    // console.log("testes de dados ");
    // console.log(servicoarray);

    let data;
    let title = [];
    let images = [];

    servicoarray.map((value, index) => {
        images[index] = {
            id: index || null,
            title: value.attributes.image_pt.data.attributes.hash || null,
            url: value.attributes.image_pt.data.attributes.url || null
        };
    });
    // console.log("contatoDados");
    // console.log(contatoDados);
    // console.log(contatoDados.data.attributes.phone);
    // console.log("contatoDados fim");
    // contatoDados.data;
    // return null;
    switch (i18n.language) {
        case "pt": {
            data = response.attributes?.content_pt || null;
            // servicoarray.forEach((item) => {
            //     title.push(item.attributes.servico_pt);
            //     images.push(item.attributes.image_pt?.data?.attributes.url);
            //     // console.log("item.attributes.image_pt  sdfdsddd");
            //     // console.log(item.attributes.image_pt?.data?.attributes.url);
            // });
            // console.log(data);
            // console.log(servicoarray);
            // dada2.forEach((item) => {
            //     images.push(item.image_pt);
            // });
            servicoarray.map((value, index) => {
                title.push(value.attributes.servico_pt);
                images[index] = {
                    id: index || null,
                    title:
                        value.attributes.image_pt.data.attributes.hash || null,
                    url: value.attributes.image_pt.data.attributes.url || null
                };
            });
            break;
        }
        case "en": {
            data = response.attributes?.content_en;
            // servicoarray.attributes.forEach((item) => {
            //     title.push(item.attributes.servico_en);
            //     images.push(item.attributes.image_en?.data?.attributes.url);
            // });
            // dados.forEach((item) => {
            //     images.push(item.image_en);
            // });
            servicoarray.map((value, index) => {
                title.push(value.attributes.servico_en);
                images[index] = {
                    id: index || null,
                    title:
                        value.attributes.image_en.data.attributes.hash || null,
                    url: value.attributes.image_en.data.attributes.url || null
                };
            });
            break;
        }
        case "fr": {
            data = response.attributes?.content_fr || null;
            // servicoarray.attributes.forEach((item) => {
            //     title.push(item.attributes.servico_fr);
            //     images.push(item.attributes.image_fr?.data?.attributes.url);
            // });
            // dados.forEach((item) => {
            //     images.push(item.image_fr);
            // });
            servicoarray.map((value, index) => {
                title.push(value.attributes.servico_fr);
                images[index] = {
                    id: index || null,
                    title:
                        value.attributes.image_fr.data.attributes.hash || null,
                    url: value.attributes.image_fr.data.attributes.url || null
                };
            });
            break;
        }
    }

    // console.log("title");
    // console.log(title);

    // return null;

    const createMarkup = () => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(data);
        return { __html: html };
    };

    return (
        <>
            <Layout user={user}>
                <Head>
                    <title>Serviços - Zebra Travel Agency</title>
                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href="/zebraicon.png"
                    ></link>
                </Head>

                <Headlogo
                    height="18rem"
                    position="absolute"
                    width="27%"
                    top="34%"
                    left="4%"
                    marginTop="7%"
                    marginHead="-2%"
                    contatoDados={contatoDados}
                >
                    <figure
                        // id={sescss.sebanner}
                        className={"image " + sescss.figure}
                    >
                        <img src="/img/a.png" />
                    </figure>
                </Headlogo>
                <section className={"container is-fluid " + sescss.servico}>
                    <div className="columns is-desktop">
                        <div className={"column " + sescss.col}>
                            <div className={sescss.boxPreto}>
                                <h1 className="title">{t("serv")}</h1>
                                <ul>
                                    {title.map((index, value) => (
                                        <li key={value}>{index}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={"column " + sescss.col2}>
                            <MyCarousel slides={images} />

                            {/*<figure className="image">
                                <img src="/img/serv.jpg" />
                            </figure>*/}
                        </div>
                    </div>
                </section>
                <section className={"container " + sescss.detalhes}>
                    <div className="columns is-desktop">
                        <div className={"column " + sescss.arti}>
                            <article dangerouslySetInnerHTML={createMarkup()} />
                        </div>
                        <div className="column">
                            <figure
                                className="image"
                                style={{ width: "105.7%" }}
                            >
                                <img
                                    style={{ height: "100vh" }}
                                    src={`${imagina}`}
                                />
                            </figure>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

// Servicos.getInitialProps = (ctx) => {
//     const obj = {
//         namespacesRequired: ["servico", "footer", "navbar"]
//     };

//     return obj;
// };

// export async function getServerSideProps(context) {
//     const url = `${process.env.API_BASE_URL}/servicetext`;

//     const response = await fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     // console.log("api response");
//     // console.log(response);
//     const dados = await response.json();

//     const obj = {
//         namespacesRequired: ["servico", "footer", "navbar"]
//     };

//     return {
//         props: { dados, obj }
//     };
// }

export const getServerSideProps = async ({ locale }) => {
    const query = qs.stringify(
        {
            // sort: ["title:asc"],
            // filters: {
            //     title: {
            //         $eq: "hello"
            //     }
            // },
            populate: "*"
            // fields: ["imagem", "content_pt", "content_en", "content_fr"]
            // pagination: {
            //     pageSize: 10,
            //     page: 1
            // },
            // publicationState: "live",
            // locale: ["en"]
        },
        {
            encodeValuesOnly: true // prettify url
        }
    );

    const url = `${process.env.API_BASE_URL}/servicos?${query}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("service response before await");
    // console.log(response);
    const servico = await response.json();
    // console.log("service response after await");
    // console.log(dados);
    const url2 = `${process.env.API_BASE_URL}/servicetext?${query}`;
    const response2 = await fetch(url2, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("query qs");
    // console.log(url2);

    const servicetext = await response2.json();
    // console.log("api servicetext response");
    // console.log(dados2.data.attributes.imagem.data.attributes.url);

    const url3 = `${process.env.API_BASE_URL}/contacto`;
    const response3 = await fetch(url3, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const contatoDados = await response3.json();
    // console.log("contadoDados");
    // console.log(contatoDados);

    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "servico",
                "footer",
                "navbar"
            ])),
            servico,
            servicetext,
            contatoDados
        } // will be passed to the page component as props
    };
};

export default Servicos;
