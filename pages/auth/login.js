import logincss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";

const Login = () => {
    return (
        <Loginlayout>
            <div className={logincss.container2}>
                <Link href="/">
                    <a>
                        <img src="/img/logoCinza.svg" />
                    </a>
                </Link>
                <div className={logincss.box2} style={{ width: "23%" }}>
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
                        <h1>Log in</h1>
                        <article>
                            Enter yours credentials to sign in
                            <br /> or use social media account
                        </article>
                    </div>
                    <div className="">
                        {/* is-rounded */}
                        <form>
                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input is-rounded"
                                        type="email"
                                        placeholder="E-mail"
                                    />
                                    <span
                                        className={
                                            "icon is-small is-left " +
                                            logincss.ico
                                        }
                                    >
                                        {/* <i className="fas fa-user"></i> */}
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input
                                        className="input is-rounded"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <span
                                        className={
                                            "icon is-small is-left " +
                                            logincss.ico
                                        }
                                    >
                                        {/* <i className="fas fa-user"></i> */}
                                    </span>
                                    <span
                                        onClick={() =>
                                            alert("nao ca tem odjada password")
                                        }
                                        className={
                                            "icon is-small is-right " +
                                            logincss.icopass
                                        }
                                    >
                                        <i className="far fa-eye-slash"></i>
                                        {/* <i className="far fa-eye"></i> */}
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <div className="level">
                                    <div className="level-left">
                                        <div className="level-item">
                                            <p className="control">
                                                <input type="checkbox" />
                                            </p>
                                            <p
                                                className="control"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <span className={logincss.keep}>
                                                    Keep me signed in
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="level-right">
                                        <div className="level-item">
                                            <Link href="/auth/forgotpw">
                                                <a className={logincss.forgot}>
                                                    Forgot password?
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={
                                    "field is-grouped is-grouped-centered " +
                                    logincss.social
                                }
                            >
                                <p className="control is-expanded">
                                    <a
                                        className={
                                            "button is-rounded " + logincss.face
                                        }
                                    >
                                        <span className="icon">
                                            <i className="fab fa-facebook-f"></i>
                                        </span>
                                        <span>Facebook</span>
                                    </a>
                                </p>
                                <p className="control is-expanded">
                                    <a
                                        className={
                                            "button is-rounded " +
                                            logincss.gmail
                                        }
                                    >
                                        <span className="icon">
                                            <img
                                                style={{
                                                    width: "79%",
                                                    marginTop: "22%"
                                                }}
                                                src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRjJGMkYyOyIgcG9pbnRzPSI0ODQuOTczLDEyMi44MDggNDUyLjI4OCw0NTEuMDE3IDU5LjcxMiw0NTEuMDE3IDMzLjM3OSwxMjkuMTYgMjU2LDI1My44MDIgICIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YyRjJGMjsiIHBvaW50cz0iNDczLjg4Niw2MC45ODMgMjU2LDI2NS42NTkgMzguMTE0LDYwLjk4MyAyNTYsNjAuOTgzICAiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojRjE0MzM2OyIgZD0iTTU5LjcxMiwxNTUuNDkzdjI5NS41MjRIMjQuMTM5QzEwLjgxMiw0NTEuMDE3LDAsNDQwLjIwNiwwLDQyNi44NzhWMTExLjk2N2wzOSwxLjA2M0w1OS43MTIsMTU1LjQ5MyAgeiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDMyRTJBOyIgZD0iTTUxMiwxMTEuOTY3djMxNC45MTJjMCwxMy4zMjctMTAuODEyLDI0LjEzOS0yNC4xNTIsMjQuMTM5aC0zNS41NlYxNTUuNDkzbDE5LjY5Mi00Ni41MjUgIEw1MTIsMTExLjk2N3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0YxNDMzNjsiIGQ9Ik01MTIsODUuMTIydjI2Ljg0NWwtNTkuNzEyLDQzLjUyNkwyNTYsMjk4LjU2MUw1OS43MTIsMTU1LjQ5M0wwLDExMS45NjdWODUuMTIyICBjMC0xMy4zMjcsMTAuODEyLTI0LjEzOSwyNC4xMzktMjQuMTM5aDEzLjk3NUwyNTYsMjE5Ljc5Mkw0NzMuODg2LDYwLjk4M2gxMy45NjJDNTAxLjE4OCw2MC45ODMsNTEyLDcxLjc5NCw1MTIsODUuMTIyeiIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojRDMyRTJBOyIgcG9pbnRzPSI1OS43MTIsMTU1LjQ5MyAwLDE0Ni4yMzUgMCwxMTEuOTY3ICIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                                            />
                                        </span>
                                        <span>Gmail</span>
                                    </a>
                                </p>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button className="input button is-rounded ">
                                        Sign in
                                    </button>
                                </div>
                            </div>
                            <div className="field">
                                <div
                                    className="control"
                                    style={{ textAlign: "center" }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.8rem",
                                            marginRight: "25%",
                                            color: "black"
                                        }}
                                    >
                                        Not a member yet?
                                    </span>
                                    <Link href="/auth/signup">
                                        <a style={{ fontSize: "0.8rem" }}>
                                            Sign up
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Loginlayout>
    );
};

export default Login;
