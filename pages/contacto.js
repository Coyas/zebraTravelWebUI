import css from "./styles/contacto.module.scss";
import Layout from "../components/layout";
import ContactForm from "../components/Contact";
import Link from "next/link";

const Contacto = () => {
    return (
        <>
            <Layout>
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
                <figure className={"image " + css.listras}>
                    <img src="/img/ZebraListra.svg" />
                </figure>

                <section className={"container " + css.contTitle}>
                    <h1 className="title">Contatos</h1>
                    <h2 className="subtitle">
                        <p>
                            <a href="tel:002382813373">+|238| 281 33 73</a>
                        </p>
                        <p>
                            <a href="mailto:info@zebratravel.net">
                                info@zebratravel.net
                            </a>
                        </p>
                    </h2>
                </section>
                <section className={"container " + css.map}>
                    <div className="columns">
                        <div className="column">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15422.962103562264!2d-24.4987502!3d14.8957806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35a681b0dafcbcba!2sZebra%20Travel%20Viagens%20%26%20Turismo!5e0!3m2!1spt-PT!2scv!4v1588503306490!5m2!1spt-PT!2scv"></iframe>
                        </div>
                        <div className="column">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Contacto;
