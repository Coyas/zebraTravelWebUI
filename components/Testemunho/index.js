import css from "./index.module.scss";
// https://bulma.io/images/placeholders/128x128.png
const Testemunho = () => {
    return (
        <>
            <div className="columns">
                <div className={"column " + css.center}>
                    <article className={css.article}>
                        <figure class={"image is-128x128 " + css.display}>
                            <img class="is-rounded" src="/img/t2.png" />
                        </figure>
                        <p>
                            <span className="icon">
                                <i class="fas fa-quote-left"></i>
                            </span>
                        </p>
                        <p className={css.txt}>
                            "Colonial Guest House was lovely as were the staff.
                            A nice place to stay. Our day tour of the v olcanic
                            crater was excellent. Top marks.”
                        </p>
                        <p className={css.autor}>Mr. Alker - Switzerland</p>
                    </article>
                </div>
                <div className={"column " + css.center}>
                    <article className={css.article}>
                        <figure class={"image is-128x128 " + css.display}>
                            <img class="is-rounded" src="/img/t1.png" />
                        </figure>
                        <p>
                            <span className="icon">
                                <i class="fas fa-quote-left"></i>
                            </span>
                        </p>
                        <p className={css.txt}>
                            “Beautiful boutique hotel with all services.
                            Excellent breakfast with freshly made pancakes. Good
                            s upport provided to arrange walking guides and
                            transfers.”
                        </p>
                        <p className={css.autor}>Ms. Marleen - Belgium</p>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Testemunho;
