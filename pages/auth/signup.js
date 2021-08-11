import signcss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { useState } from "react";
import Head from "next/head";

const Signup = () => {
    const { register, errors, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [err, setErr] = useState(true);

    const signup = async (data, e) => {
        console.log("process.env.API_BASE_URL: ");
        console.log(process.env.API_BASE_URL);

        const response = await fetch(
            `${process.env.API_BASE_URL}/auth/local/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: `${data.firstName}_${data.lastName}`,
                    email: data.email,
                    password: data.password,
                    confirmed: false,
                    firstName: data.firstName,
                    lastName: data.lastName
                })
            }
        );

        const responseData = await response.json();
        console.log(response);
        console.log(responseData);

        if (response.status == 200 && response.ok) {
            Router.push("/");
        } else {
            setError("There is an error on signup proccess");
            setErr(false);
        }
    };

    return (
        <Loginlayout>
            <Head>
                <title>Sign up - Zebra Travel Agency</title>
            </Head>
            <div className={signcss.container2} style={{ height: "121vh" }}>
                <Link href="/">
                    <a>
                        <img src="/img/logoCinza.svg" />
                    </a>
                </Link>
                {/* {registro ? "sim": "nao"} */}
                <div className={signcss.box2} style={{ width: "23%" }}>
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
                        <h1>Create an account and discover the benefits</h1>
                        <article style={{ color: err ? "" : "red" }}>
                            {error ||
                                "Add yours data below to create a zetraTravel account"}
                        </article>
                    </div>
                    <div className="">
                        {/* is-rounded */}
                        <form onSubmit={handleSubmit(signup)}>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        ref={register({
                                            required: "This field is required",
                                            minLength: {
                                                value: 4,
                                                message: "Min length is 4"
                                            }
                                        })}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.firstName &&
                                            errors.firstName.message}
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        ref={register({
                                            required: "This field is required",
                                            minLength: {
                                                value: 4,
                                                message: "Min length is 4"
                                            }
                                        })}
                                    />
                                    <span style={{ color: "red" }}>
                                        {errors.lastName &&
                                            errors.lastName.message}
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        ref={register({
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
                                    <input
                                        className="input is-rounded"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        ref={register({
                                            required: "this field is riquered",
                                            maxLength: {
                                                value: 30,
                                                message: "max length is 30" // <p>error message</p>
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "min length is 6" // <p>error message</p>
                                            }
                                        })}
                                    />

                                    <span style={{ color: "red" }}>
                                        {errors.password &&
                                            errors.password.message}
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <p
                                    className="control"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "0.7rem"
                                    }}
                                >
                                    <input
                                        style={{ marginRight: "4%" }}
                                        type="checkbox"
                                        required
                                    />
                                    I agree with{" "}
                                    <Link href="">
                                        <a>
                                            <span
                                                style={{
                                                    color: "blue !important"
                                                }}
                                            >
                                                Terms of Service{"  "}
                                            </span>
                                        </a>
                                    </Link>
                                    and{"  "}
                                    <Link href="">
                                        <a>
                                            <span
                                                style={{
                                                    color: "blue !important"
                                                }}
                                            >
                                                Privacy Policy
                                            </span>
                                        </a>
                                    </Link>
                                </p>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button
                                        type="submit"
                                        style={{ marginBottom: "3%" }}
                                        className="input button is-rounded "
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </div>
                            <p>
                                <Link href="/auth/login">
                                    <a style={{ fontDize: "0.6rem" }}>
                                        Are you already a member?
                                    </a>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Loginlayout>
    );
};

export default Signup;
