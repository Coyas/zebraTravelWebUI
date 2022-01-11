import css from "./index.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { useTranslation } from "next-i18next";
// import { googleRecaptcha } from "../TerraSystem/utils";

const ContactForm = () => {
    const { t } = useTranslation("contacto");
    const [valor, setValor] = useState();
    const [mail, setMail] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const submeter = async (data, e) => {
        setLoading(true);
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

        // console.log("dados:");
        // console.log(dados);
        // console.log(dados?.accepted[0]);

        e.target.reset();
        // limpar o textArea
        setValor("");
        // registrar o email como enviado
        setMail(true);
        // setar email enviado
        switch (dados.statusCode) {
            case 200: {
                setEmail(true);
                break;
            }
            case 500: {
                console.log("erro no envio de email");
            }
            default:
                setLoading(false);
        }
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
                                {...register("name", {
                                    requied: true,
                                    minLength: 4
                                })}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className={"input " + css.bordas}
                                type="email"
                                {...register("email", { requied: true })}
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
                                {...register("message", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button
                                type="submit"
                                className={
                                    loading
                                        ? "button is-rounded is-loading " +
                                          css.amarelo
                                        : "button is-rounded " + css.amarelo
                                }
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

export default ContactForm;
