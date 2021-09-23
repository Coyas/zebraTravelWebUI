import css from "./index.module.scss";
import api from "../../lib/api";
// https://bulma.io/images/placeholders/128x128.png

const Testemunho = () => {
    const { response, error, isLoading } = api("/api/testimunhos");

    //console.log("response");
    //console.log(response);

    // {
    //     !isLoading &&
    //         response.map((teste) => (
    //             <li key={teste.id}>
    //                 <p>{teste.nome}</p>
    //                 <p>{teste.message}</p>
    //                 <img src={teste.url} alt={teste.nome} />
    //             </li>
    //         ));
    // }

    return (
        <>
            <div className="columns">
                {!isLoading &&
                    response.map((dados) => (
                        <div className={"column " + css.center} key={dados.id}>
                            <article className={css.article}>
                                <figure
                                    className={
                                        "image is-128x128 " + css.display
                                    }
                                >
                                    <img
                                        className="is-rounded"
                                        src={`${process.env.API_BASE_URL}${dados.image?.url}`}
                                    />
                                </figure>
                                <p>
                                    <span className="icon">
                                        <i className="fas fa-quote-left"></i>
                                    </span>
                                </p>
                                <p className={css.txt}>"{dados.message}”</p>
                                <p className={css.autor}>
                                    {dados.nome} - {dados.pais}
                                </p>
                            </article>
                        </div>
                    ))}
                {/* <div className={"column " + css.center}>
                    <article className={css.article}>
                        <figure className={"image is-128x128 " + css.display}>
                            <img className="is-rounded" src="/img/t1.png" />
                        </figure>
                        <p>
                            <span className="icon">
                                <i className="fas fa-quote-left"></i>
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
                </div> */}
            </div>
        </>
    );
};

// export async function getStaticProps() {
//     const { response, error, isLoading } = api("/api/testimunhos");
//     return {
//         props: { response } // will be passed to the page component as props
//     };
// }

// Testemunho.getInitialProps = async (ctx) => {
//     const res = await fetch("/api/testimunhos");
//     const json = await res.json();
//     return { stars: json, agua: "agua terra" };
// };

export default Testemunho;
