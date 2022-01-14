import forgcss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Router from "next/router";
import Head from "next/head";

const Forgotpw = () => {
    const { register, errors, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const resetpw = async (data) => {
        setLoading(true);

        let response;
        if (!data) {
            setError("Não Pode haver campos vazias");
            // set error
            setErr(false);
            // stop loading
            setLoading(false);
        } else {
            response = await fetch(
                `${process.env.API_BASE_URL}/auth/forgot-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: data?.email
                    })
                }
            );
        }

        if (response.status == 200 && response.ok) {
            Router.push("/auth/login");
        } else {
            setLoading(false);
        }
    };

    return (
        <Loginlayout>
            <Head>
                <title>Forgot Password? - Zebra Travel Agency</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    href="/zebraicon.png"
                ></link>
            </Head>
            <div className={forgcss.container2}>
                <Link href="/">
                    <a>
                        <img src="/img/logoCinza.svg" />
                    </a>
                </Link>
                <div className={forgcss.box2} style={{ width: "23%" }}>
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                {/* algum cusa pa lado esquerda */}
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <Link href="/auth/login">
                                    <a>
                                        <span className="icon">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1>Forgot your password?</h1>
                        <article>
                            Enter your email or phone number
                            <br /> and recover your account
                        </article>
                    </div>
                    <div className="">
                        {/* is-rounded */}
                        <form onSubmit={handleSubmit(resetpw)}>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: "this is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: "Invalid email address"
                                            }
                                        })}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.email && errors.email.message}
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <hr />
                                </div>
                            </div>
                            {/* <span className="tag">Tag label</span> */}
                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input is-rounded"
                                        type="number"
                                        placeholder="Phone Number"
                                        min="0"
                                        name="phone"
                                    />
                                    <span
                                        className={
                                            "icon is-small is-left " +
                                            forgcss.ico
                                        }
                                    >
                                        {/* <i className="fas fa-user"></i> */}
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button
                                        style={{ marginBottom: "8%" }}
                                        className={
                                            loading
                                                ? "input button is-rounded is-loading"
                                                : "input button is-rounded"
                                        }
                                        type="submit"
                                    >
                                        Send Request
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Loginlayout>
    );
};

export default Forgotpw;
