import forgcss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import Head from "next/head";

const ConfirmEmail = () => {
    // get confirmation code
    const router = useRouter();
    console.log("router.query");
    console.log(router.query);
    const { confirmation } = router.query;

    // muito importante pois condiciona o ssr
    if (!confirmation && typeof window !== "undefined") {
        router.push("/");
    }

    const confirm = async () => {
        const response = await fetch(
            `${process.env.API_BASE_URL}/auth/email-confirmation?confirmation=${confirmation}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (response.redirected) {
            router.push("/auth/login");
        }
    };

    return (
        <Loginlayout>
            <Head>
                <title>Email Activation - Zebra Travel Agency</title>
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
                                <Link href="/">
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
                        <h1>Email Confirmation</h1>
                        <article>
                            Confirm the email to
                            <br /> Active your account
                        </article>
                    </div>
                    <div className="">
                        {/* is-rounded */}
                        <div className="field">
                            <div className="control">
                                <button
                                    style={{ marginBottom: "8%" }}
                                    className="input button is-rounded "
                                    onClick={confirm}
                                >
                                    Confirm Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Loginlayout>
    );
};

export default ConfirmEmail;
