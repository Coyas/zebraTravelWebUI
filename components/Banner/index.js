import css from "./index.module.scss";
import Link from "next/link";

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
    // console.log(vars);

    return (
        <>
            <div className={"columns " + vars}>
                <div className={"column " + css.b}>
                    <h1 className="title">Casa Colonial Koening</h1>
                    <h6 className="subtitle is-6">
                        You can’t fall if you don’t climb. But
                    </h6>
                    <article className={css.artD}>
                        <div className={css.txt}>
                            You can’t fall if you don’t climb. But there’s no
                            joy in living your whole life on the ground. You
                            can’t fall if you don’t climb. But there’s no joy in
                            living your whole life on the ground. You can’t fall
                            if you don’t climb. But there’s no joy in living
                            your whole life on the ground. You can’t fall if you
                            don’t climb. But there’s no joy in living your whole
                            life on the ground. You can’t fall if you don’t
                            climb. But there’s no joy in living your whole life
                            on the ground. You can’t fall if you don’t climb.
                            But there’s no joy in living your whole life on the
                            ground.
                        </div>
                        <button className={"button " + css.amarelo}>
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
                                <Link href="ss">
                                    <a className={"level-item"}>
                                        <span className="margi">89k</span>
                                        <span className="icon">
                                            <i className="far fa-comment"></i>
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </nav>
                    </article>
                </div>
                <div className={"column " + css.b}>
                    <figure className="image">
                        <img src="img/b.png" />
                    </figure>
                </div>
            </div>
        </>
    );
};

export default Banner;
