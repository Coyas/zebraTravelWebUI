import css from "./index.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { i18n, withTranslation } from "../../i18n";
import fetch from "isomorphic-unfetch";
// import { googleRecaptcha } from "../TerraSystem/utils";

const ContactForm = ({ t }) => {
    const [valor, setValor] = useState();
    const [mail, setMail] = useState(false);
    const [email, setEmail] = useState("");
    const { register, handleSubmit, reset } = useForm();

    const submeter = async (data, e) => {
        // const ok = googleRecaptcha(data);
        // if (!ok) console.log("nao deve enviar email");
        const url = `${process.env.API_BASE_URL}/contactos`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message
            })
        });

        const dados = await response.json();

        e.target.reset();
        // limpar o textArea
        setValor("");
        // registrar o email como enviado
        setMail(true);
        // setar email enviado
        setEmail(dados.accepted[0]);
    };

    return (
        <>
            {mail ? (
                <div
                    className="notification is-success is-light"
                    style={{ textAlign: "center" }}
                >
                    {/* <button className="delete"></button> */}
                    Email {t("to")} {email} {t("sended")}
                </div>
            ) : (
                <form className={css.form} onSubmit={handleSubmit(submeter)}>
                    <input
                        type="hidden"
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                    />
                    <div className="field">
                        <label className="label">{t("nome")}</label>
                        <div className="control">
                            <input
                                className={"input " + css.bordas}
                                type="text"
                                ref={register({ requied: true, minLength: 4 })}
                                name="name"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className={"input " + css.bordas}
                                type="email"
                                ref={register({ requied: true })}
                                name="email"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">{t("msg")}</label>
                        <div className="control">
                            <textarea
                                className={"textarea " + css.bordas}
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                ref={register({ required: true })}
                                name="message"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button
                                type="submit"
                                className={"button is-rounded " + css.amarelo}
                            >
                                {t("send")}
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default withTranslation("contacto")(ContactForm);
