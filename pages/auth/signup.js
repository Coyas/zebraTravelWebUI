import signcss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";

const Signup = () => {
    return (
        <Loginlayout>
            <div className={signcss.container2} style={{ height: "121vh" }}>
                <Link href="/">
                    <a>
                        <img src="/img/logoCinza.svg" />
                    </a>
                </Link>
                <div className={signcss.box2} style={{ width: "23%" }}>
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
                        <h1>Create an account and discover the benefits</h1>
                        <article>
                            Add yours data below to create a zetraTravel account
                        </article>
                    </div>
                    <div className="">
                        {/* is-rounded */}
                        <form>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-rounded"
                                        type="password"
                                        placeholder="Password"
                                    />
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
                                        <a style={{ color: "blue !important" }}>
                                            {" "}
                                            Terms of Service{" "}
                                        </a>
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="">
                                        <a style={{ color: "blue !important" }}>
                                            Privacy Policy
                                        </a>
                                    </Link>
                                </p>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button
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
