import forgcss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";

const Forgotpw = () => {
    return (
        <Loginlayout>
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
                        <h1>Forgot your password?</h1>
                        <article>
                            Enter your email or phone number
                            <br /> and recover your account
                        </article>
                    </div>
                    <div className="">
                        {/* is-rounded */}
                        <form>
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
                                    <hr />
                                </div>
                            </div>
                            {/* <span class="tag">Tag label</span> */}
                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input is-rounded"
                                        type="number"
                                        placeholder="Phone Number"
                                        min="0"
                                    />
                                    <span
                                        class={
                                            "icon is-small is-left " +
                                            forgcss.ico
                                        }
                                    >
                                        {/* <i class="fas fa-user"></i> */}
                                    </span>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button
                                        style={{ marginBottom: "8%" }}
                                        className="input button is-rounded "
                                    >
                                        Reset password
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
