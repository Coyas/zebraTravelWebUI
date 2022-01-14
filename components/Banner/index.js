import css from "./index.module.scss";
import Link from "next/link";
import Router from "next/router";

const Banner = (props) => {
    const pp = props.bb;
    let vars;
    if (pp === "B1") {
        // console.log("é bb");
        vars = css.bb;
    } else {
        // console.log("nao é bb é bc");
        vars = css.bc;
    }
    // console.log("goto");
    // console.log(props.goto);
    const a = props.goto;
    const baiPa = () => {
        // console.log("goto");
        // console.log(a);
        Router.push(a);
    };
    const likeIt = () => {
        alert("likeIt");
    };

    return (
        <>
            <div className={"columns " + vars}>
                <div className={"column " + css.b}>
                    <h1 className="title">{props.title}</h1>
                    <h6 className="subtitle is-6">{props.subtitle}</h6>
                    <article className={css.artD}>
                        <div className={css.txt}>{props.body}</div>
                        <button
                            onClick={() => baiPa(a)}
                            className={"button " + css.amarelo}
                        >
                            BOOK NOW
                        </button>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a
                                    className="level-item"
                                    href="https://www.addtoany.com/share"
                                >
                                    <span className="icon is-small">
                                        <i className="fas fa-share-alt"></i>
                                    </span>
                                </a>
                                <script>
                                    var a2a_config = a2a_config || {};
                                    a2a_config.onclick = 1;
                                </script>
                            </div>
                            <div className="level-right">
                                <button
                                    onClick={likeIt}
                                    className={css.linkeit}
                                >
                                    <a className={"level-item"}>
                                        <span className="margi">
                                            {props.comment}
                                        </span>
                                        <span className="icon">
                                            <i className="far fa-comment"></i>
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </nav>
                    </article>
                </div>
                <div className={"column " + css.b}>
                    <figure className="image">
                        <img src={props.image} />
                    </figure>
                </div>
            </div>
        </>
    );
};

export default Banner;
