import css from "./index.module.scss";
// import api from "../../lib/api";
// https://bulma.io/images/placeholders/128x128.png

const Testemunho = ({ dados }) => {
    // const { response, error, isLoading } = api("/api/testimunhos");

    // console.log("testimunhos");
    // console.log(dados.data[0]);

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

    let sem_image = true;
    dados.data.map((value, index) => {
        if (value.attributes.image.data == null) {
            // alert("nao tem dados nao");
            sem_image = false;
        }
    });

    return (
        <>
            <div className="columns">
                {dados.data.map((value, index) => (
                    <div className={"column " + css.center} key={index}>
                        <article className={css.article}>
                            <figure
                                className={"image is-128x128 " + css.display}
                            >
                                <img
                                    className="is-rounded"
                                    src={
                                        sem_image
                                            ? value.attributes.image.data[0]
                                                  .attributes.url
                                            : "/user.png"
                                    }
                                />
                            </figure>
                            <p>
                                <span className="icon">
                                    <i className="fas fa-quote-left"></i>
                                </span>
                            </p>
                            <p className={css.txt}>
                                "{value.attributes.message}”
                            </p>
                            <p className={css.autor}>
                                {value.attributes.nome} -{" "}
                                {value.attributes.pais}
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
