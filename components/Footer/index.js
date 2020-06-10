import scss from "./footer.module.scss";
import Hr from "../Hr";
// import Link from "next/link";
import { useForm } from "react-hook-form";
import { i18n, Link, withTranslation } from "../../i18n";

const Footer = ({ t }) => {
    const { register, handleSubmit } = useForm();

    const subscreve = (data, e) => {
        // e.preventDefault();
        e.target.reset();
        alert(`Email: ${data.emailSub}`);
    };
    return (
        <>
            <section className={"footer"}>
                <Hr height="2" opacidade="0.7" cor="#979ca8" />
                <div className={"container " + scss.foot}>
                    <div className="columns is-centered">
                        <div className="column">
                            <figure className={scss.image}>
                                <img src="/img/logoCinza.svg" />
                            </figure>
                            <p className={scss.txt}>{t("sobre")}</p>
                            {/* <p> */}
                            <div className="level">
                                <div className="level-right">
                                    <p className={"level-item " + scss.mrg}>
                                        <a href="dqdq">
                                            <span className="icon">
                                                <i className="fab fa-facebook-f"></i>
                                            </span>
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a href="dqdq">
                                            <span className="icon">
                                                <i className="fab fa-instagram"></i>
                                            </span>
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a href="dqdq">
                                            <span className="icon">
                                                <i className="fab fa-youtube"></i>
                                            </span>
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a href="dqdq">
                                            <span className="icon">
                                                <i className="fab fa-tripadvisor"></i>
                                            </span>
                                            Tripadvisor
                                        </a>
                                    </p>
                                    <p className={"level-item " + scss.mrg}>
                                        <a className={scss.book} href="dqdq">
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
                                <h1 className={scss.h1}>{t("RS")}</h1>
                                <ul>
                                    <li>
                                        <Link href="/legal">
                                            <a>{t("leg")}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/termos">
                                            <a>{t("term")}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacidade">
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
                                                "button is-rounded " +
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
                <Hr height="1" opacidade="0.7" cor="#979ca8" />
                <p className={"has-text-centered " + scss.footer2}>
                    ZEBRA GROUP - &copy; 2020. {t("direitos")}.
                </p>
            </section>
        </>
    );
};

export default withTranslation("footer")(Footer);
