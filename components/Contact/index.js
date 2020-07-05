import css from "./index.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { i18n, withTranslation } from "../../i18n";

const ContactForm = ({ t }) => {
    const [valor, setValor] = useState();
    const { register, handleSubmit, reset } = useForm();

    const submeter = (data, e) => {
        e.target.reset();
        setValor("");
        alert(
            `
            Name: ${data.name}
            Email: ${data.email}
            message: ${data.message}
            `
        );
    };

    return (
        <>
            <form className={css.form} onSubmit={handleSubmit(submeter)}>
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
        </>
    );
};

export default withTranslation("contacto")(ContactForm);
