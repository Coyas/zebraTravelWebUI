import logincss from "../styles/auth.module.scss";
import Loginlayout from "../../components/loginlayout";
import Link from "next/link";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { useForm } from "react-hook-form";
import { setToken } from "../../lib/auth";
import Head from "next/head";
import { useRouter } from "next/router";

const Login = () => {
    const [odju, Abriodju] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, errors, handleSubmit } = useForm();
    const router = useRouter();

    const [data, setData] = useState({
        identifier: "",
        password: ""
    });

    const Changepw = () => {
        Abriodju(!odju);
    };

    const signin = async (e) => {
        // e.preventDefault();
        setLoading(true);

        // console.log(`
        // user: ${data.identifier}
        // passwd: ${data.password}
        // `);

        // console.log(router.query);
        //get options to redirect
        const { redirect, url } = router.query;

        // console.log(`URL: ${process.env.API_BASE_URL}`);

        const response = await fetch(`${process.env.API_BASE_URL}/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier: data.identifier,
                password: data.password
            })
        });
        const responseData = await response.json();
        console.log(response);
        console.log(responseData);

        if (response.status == 200 && response.ok) {
            setToken(responseData, redirect, url);
        } else {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <Loginlayout>
            <Head>
                <title>Log in - Zebra Travel Agency</title>
            </Head>
            <div className={logincss.container2}>
                <Link href="/">
                    <a>
                        <img src="/img/logoCinza.svg" />
                    </a>
                </Link>
                <div className={logincss.box2}>
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
                        <p>{/** add errors message here */}</p>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(signin)}>
                            <div className="field">
                                <div className="control has-icons-left">
                                    <input
                                        className="input is-rounded"
                                        type="text"
                                        placeholder="E-mail or Username"
                                        name="identifier"
                                        ref={register({ required: true })}
                                        onChange={handleChange}
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
                                        type={odju ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        ref={register({ required: true })}
                                        onChange={handleChange}
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
                                        onClick={Changepw}
                                        className={
                                            "icon is-small is-right " +
                                            logincss.icopass
                                        }
                                    >
                                        {odju ? (
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD20lEQVRoge3YS2hdRRgH8F9iXJloa2JtEtuCrfWBLrpSBG1dNyEoqGiNFUWhKirYnbgRFfFJd+rehU+UtlZbom19ICr4WLRWbReKKETBJEKbpMl18c3tuUnPubm5aaKL84fhJvM9Zr4z32uGEiVKlChRokSJEouFljOo61xsxLW4AuvRhY5EH8OfOILD+AwH0vx/jg7chSFMojLPMYl92CozeEmxBi9iZNbGvsdzuBFXYjnOTmM5rsJNeBqf4GSN7Aiex6qlMOAC7MD4LAOeQE8T+rqEUbW6TuClRFsU3Im/0mLTMld6c4F6W7Az6TqZdFdEPA0uUPcMrMEHsi/2KTaLU5lI9DwMYD/+SeNj9BfwrhMfZjLpPlCz3vtYvVAjbsWo7AttFV/wvjT3WoHcM4oD/KkCmdcT/f70/yCG09wobmnGgDYRzNXF9+LCGvruNH9bjuxAHSOqoy9H7o5E21Mzt0LmDdMikbQ1asQy4QZVn30crbN4fk30tTny+xsw5KMcuUsS7ZdZ8614TJbhhtIe66JbpNCKONYbCvhOJJ5zcmhjDRgymiPXnmjHC9bcJHO1b7GyyIjVOJYYj4nKXIRq3OQVsWYN6ahDq2J9zR6Pyqk5K/FjYvhGHWsTjiTePGOrbllvDOXIXZpoh+dYu1ucSCXtY8ZeP0+E79A5hyIiJRYFe38DhmzOkduSaLsaWL8r7bUierZTQVxJv60aywq70+9ADm2nqNZFeLJGvhZVXXm02TjL6QkIM13rkDi+erhIFK9xXFzA0yey01gaQ/JPgiiI40ln7xxr9wj3y3UtItiP1jAUbbCKVxPvW3PwNYJ3kq6X5+BbK/vgP6vTYHbLfG8Y19VR2iPLXo82vOXTsT3p+Fv9JLNRdBeNJiTLhBtUxHE/pPgC1o8pUayaMWZ7kp1S7HYteETWce/DeY0u0CbuBtUss0u08Hl4MG2kgrflV/vZWCdzpyk8UMC3QtYOTeNZEejzRm3T+Lto5fNOp092yRrHG7gdl4mK3Z7+3iLa/gmZO+WdRItoUP+QFcmbmzGgFj14V3Y6X+LqHL4ucelq5Mo7iVfkZ8cN4qpQ5d2j+KrQFAZlwTaF93B9Dl8vtgmXOCRLv4eEi26Tn2I3iRpUddNh0REvCrpEe19tGiv4Cnfj/Cb0deIefF2j7zhe0FiHcQrNPgetwsO4VzwDEe7yBQ6K9PgTfhOn0SLipFf0ZxvEaV4j6yRGRG3akeSWFB0iKPfKAng+YwIfiiTSvpCNnMkHunbZA93lIkt1ynL+iHi8+EH2QHdQ3OdLlChRokSJEiVK/I/xL9v1cIhAZQ2FAAAAAElFTkSuQmCC" />
                                        ) : (
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACLUlEQVRYhe3WzW+NQRQG8F+rPoJqi6qwING/wIaUSISkDeIfqT0LH/EVTSVWthYilo2FnUQkYiFWqGiRSGiqKCKCovRazHl73/u65Taa3C56ksnceXLe8zxzzsy5w4JVWi/W15O8hKF6iViHwRDxBBsWRNRbxMP5ICLLxBA2ogtncRtj+B7jNe6gD7vQNFci2pUz8SvmWsY7nEHH/5AvqiKihKs4iE6swDKpRN3ox0jOdyKwlbMl78FzHKgi4l99ohG78SEn5CX210K8GBcxFR9+w74ZRJyXaj8q1X5JIVZ/+E7l5gvBUdVW41Y4T+KodAgnpANYFFEcfYV42wIfjFiTsb6J1iL5WtwPh1HsCPxjYC0535lEjFbZUCliwE68CuxBxAFtAWSp3ZQL8jXw5kLwaiLGCj7NgX/JYZuDIxPR1lj4qEH59MvtakvBbxx7pPRmdqXg0xnzSA5rDA4hYtralbPwRrkElwM7prr97XacCPxSrLsidgl3pRJVWKt0QEr4iXPSNSzhLVbNQkSLlKWSlKnD+BHrG/4s6bQ1SdcnuzqDeB+/B6QU1iLiunI27yl30lMqSzyjdUuNqHjSB1TeiJlEFMdT7K2FOG/LpX7+qRBsHMexVWqxLcr/lu14lPP9jCNYOlvyvK3BSbxQfXdZz+8J/w48DnzYHD7vGrAdp6VSDAfxBJ7hmtRTBGl23+v6xszKUddHzYKIeSMifzAP1UNAJqK3XuTz034DxNLfZ6nPz9AAAAAASUVORK5CYII=" />
                                        )}
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
                                        href={
                                            process.env.API_BASE_URL +
                                            "/connect/facebook"
                                        }
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
                                        href={
                                            process.env.API_BASE_URL +
                                            "/connect/google"
                                        }
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
                                    <button
                                        type="submit"
                                        className={
                                            loading
                                                ? "input button is-rounded is-loading"
                                                : "input button is-rounded is-loading"
                                        }
                                    >
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
