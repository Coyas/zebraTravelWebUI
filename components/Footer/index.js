import scss from "./footer.module.scss";
import Hr from "../Hr";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import api from "../../lib/api";
import Swal from "sweetalert2";

const Footer = () => {
    const { t } = useTranslation("footer");
    const { register, handleSubmit } = useForm();
    // const [Ok, setOk] = useState(1);..
    const { response, error, isLoading } = api("/api/links");
    const [loading, setLoading] = useState(false);

    // pegar o ano atual
    var today = new Date();
    //var dd = String(today.getDate()).padStart(2, "0");
    //var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var anoAtual = today.getFullYear();

    // console.log("response links api fora");
    // console.log(`response => ${response}`);

    // if (!isLoading && response) {
    //     response.map((link) => {
    //         console.log("link.facebook");
    //         console.log(link);
    //     });
    // }

    const subscreve = async (data, e) => {
        // e.preventDefault();
        e.target.reset();
        setLoading(true);

        const response = await fetch(
            `${process.env.API_BASE_URL}/newsletters`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: data.emailSub
                })
            }
        );
        const responseData = await response.json();
        // console.log(responseData);
        // console.log(response);

        if (response.ok && response.status == 200) {
            setLoading(false);
            // setOk(1);
            // createNotification("success");
            Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: "registrado com sucesso",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            setLoading(false);
            // setOk(2);
            // createNotification("error");
            Swal.fire({
                position: "bottom-end",
                icon: "error",
                title: "Erro, o email pode ja exitir",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <>
            <section className={"footer"}>
                <Hr height="1" opacidade="0.7" cor="#979ca8" />
                <div className={"container " + scss.foot}>
                    <div className={"columns is-centered " + scss.alinha}>
                        <div className="column">
                            <Link href="/">
                                <a>
                                    <figure className={scss.image}>
                                        <img src="/img/logoCinza.svg" />
                                    </figure>
                                </a>
                            </Link>
                            <p className={scss.txt}>{t("sobre")}</p>
                            {/* <p> */}
                            <div className="level">
                                <div className="level-right">
                                    <p className={"level-item " + scss.mrg}>
                                        <a
                                            href={response?.facebook}
                                            target="_blank"
                                        >
                                            <span className="icon">
                                                <i className="fab fa-facebook-f"></i>
                                            </span>
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a
                                            href={response?.instagram}
                                            target="_blank"
                                        >
                                            <span className="icon">
                                                <i className="fab fa-instagram"></i>
                                            </span>
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a
                                            href={response?.youtube}
                                            target="_blank"
                                        >
                                            <span className="icon">
                                                <i className="fab fa-youtube"></i>
                                            </span>
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a
                                            href={response?.tripadvisor}
                                            target="_blank"
                                        >
                                            <span className="icon">
                                                <i className="fab fa-tripadvisor"></i>
                                            </span>
                                            Tripadvisor
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a
                                            className={scss.book}
                                            href={response?.Booking}
                                            target="_blank"
                                        >
                                            Booking
                                            <span>.com</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            {/* </p> */}
                        </div>
                        <div
                            className="column"
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div className={scss.fodi}>
                                <h1 className={scss.h1}>{t("LU")}</h1>
                                <ul>
                                    <li>
                                        <a
                                            href="https://planetofhotels.com/en/cape-verde/sao-filipe/colonial-guest-house"
                                            target="_blank"
                                        >
                                            planetofhotels.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.capeverde.co.uk/colonial-guest-house"
                                        >
                                            capeverde.co.uk
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://hoteis.com/ho474253/the-colonial-guest-house-sao-filipe-cabo-verde/?rffrid=sem.hcom.PT.google.003.00.04.s.kwrd%3Dc.434039854451.68405139308.1580733278..aud-887569465082%3Adsa-589523905588.9075481...CjwKCAjwy7CKBhBMEiwA0Eb7an_2eGhDKjiFt-HbpqxUhuszdDru-Dq9XKMVztyZvO_XoEM6T2AV4BoCaVsQAvD_BwE.aw.ds&PSRC=AFF05&gclid=CjwKCAjwy7CKBhBMEiwA0Eb7an_2eGhDKjiFt-HbpqxUhuszdDru-Dq9XKMVztyZvO_XoEM6T2AV4BoCaVsQAvD_BwE"
                                        >
                                            hoteis.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://www.expedia.com/Sao-Filipe-Hotels-The-Colonial-Guest-House.h9028417.Hotel-Information"
                                        >
                                            expedia.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="column"
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <div className={scss.fodi}>
                                <h1 className={scss.h1}>{t("RS")}</h1>
                                <ul>
                                    <li>
                                        <Link href="/privacy">
                                            <a>{t("leg")}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy">
                                            <a>{t("term")}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy">
                                            <a>{t("privac")}</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"column " + scss.lfoot}>
                            <h1 className={scss.h1}>NEWSLETTER</h1>
                            <form onSubmit={handleSubmit(subscreve)}>
                                <div className="field is-grouped">
                                    <p className="control is-expanded">
                                        <input
                                            className="input is-rounded"
                                            type="email"
                                            placeholder="E-mail"
                                            ref={register({ required: true })}
                                            name="emailSub"
                                        />
                                    </p>
                                    <p className="control">
                                        <button
                                            type="submit"
                                            className={
                                                loading
                                                    ? "button is-rounded is-loading " +
                                                      scss.amarelo
                                                    : "button is-rounded " +
                                                      scss.amarelo
                                            }
                                        >
                                            <span className={scss.subscreve}>
                                                {t("subscreve")}
                                            </span>
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Hr height="2" opacidade="0.7" cor="#979ca8" />
                <p className={"has-text-centered " + scss.footer2}>
                    ZEBRA GROUP - &copy; {anoAtual}. {t("direitos")}.
                </p>
            </section>

            {/* <script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.SiteKey}`}
            ></script> */}
            {/* <script>
                grecaptcha.ready(function(){" "}
                {grecaptcha
                    .execute(process.env.SiteKey, {
                        action: "homepage"
                    })
                    .then(function (token) {
                        //  console.log(token)
                        document.getElementById(
                            "g-recaptcha-response"
                        ).value = token;
                    })}
                )
            </script> */}
        </>
    );
};

export default Footer;
