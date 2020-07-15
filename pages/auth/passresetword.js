import forgcss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Head from "next/head";

const Passresetword = () => {
    const { register, errors, handleSubmit } = useForm();
    const router = useRouter();
    const { code } = router.query;
    // console.log(code);

    if (!code && typeof window !== "undefined") {
        router.push("/");
    }

    const resetpw = async (data) => {
        // alert(data.password);
        // alert(data.confirmpass);
        const response = await fetch(
            `${process.env.API_BASE_URL}/auth/reset-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: code,
                    password: data.password,
                    passwordConfirmation: data.confirmpass
                })
            }
        );

        if (response.status == 200 && response.ok) {
            router.push("/auth/login");
        }
    };

    return (
        <Loginlayout>
            <Head>
                <title>Reset Password - Zebra Travel Agency</title>
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
                        <h1>Reset password</h1>
                        <article>
                            Enter your data to reset
                            <br /> the password
                        </article>
                    </div>
                    <div className="">
                        {/* is-rounded */}
                        <form onSubmit={handleSubmit(resetpw)}>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="password"
                                        placeholder="New Password"
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
                                        {errors.email && errors.email.message}
                                    </span>
                                </div>
                            </div>
                            {/* <div className="field">
                                <div className="control">
                                    <hr />
                                </div>
                            </div> */}
                            {/* <span className="tag">Tag label</span> */}
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="password"
                                        placeholder="Repeat Password"
                                        name="confirmpass"
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
                                        className="input button is-rounded "
                                        type="submit"
                                    >
                                        Reset Password
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

export default Passresetword;
