import sescss from "./styles/servicos.module.scss";
import Layout from "../components/layout";
import Headlogo from "../components/Headlogo";

const Servicos = () => {
    return (
        <>
            <Layout>
                <Headlogo
                    height="13rem"
                    position="absolute"
                    width="27%"
                    top="34%"
                    left="4%"
                    marginTop="7%"
                    marginHead="-2%"
                >
                    <figure
                        // id={sescss.sebanner}
                        className={"image " + sescss.figure}
                    >
                        <img src="/img/a.png" />
                    </figure>
                </Headlogo>
                <section className={"container is-fluid " + sescss.servico}>
                    <div className="columns is-desktop">
                        <div className={"column " + sescss.col}>
                            <div className={sescss.boxPreto}>
                                <h1 className="title">SERVIÇOS</h1>
                                <ul>
                                    <li>Bilhetes de Viagens e Barco</li>
                                    <li>Seguros de Viagens</li>
                                    <li>Acomodações</li>
                                    <li>Visto de entrada</li>
                                </ul>
                            </div>
                        </div>
                        <div className={"column " + sescss.col2}>
                            <figure className="image">
                                <img src="/img/a.png" />
                            </figure>
                            <figure className="image">
                                <img src="/img/b.png" />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className={"container " + sescss.detalhes}>
                    <div className="columns is-desktop">
                        <div className={"column " + sescss.arti}>
                            <article>
                                Itinerary
                                <br />
                                This is a typical itinerary for this product
                                <br />
                                <br />
                                Stop At: Parque Natural do Fogo, Fogo Island,
                                Fogo Cape Verde
                                <br />
                                <br />
                                Departure from São Filipe then stopping at
                                Forno, where we visit one of the areas where the
                                drop-by-drop irrigation method is used (a
                                technique adopted by farms on the island in
                                order to minimize the effect of drought). We
                                then continue to Achada Furna, a chance to see
                                the communities where new houses were built
                                after the eruption of 1995 and 2014 for the
                                population of Chã das Caldeiras. Many of the
                                locals have now returned to the Caldeira.
                                Continuing on, we stop in Cabeça Fundão where we
                                can see the old craters and the wonderful mixed
                                colors in the landscape. Finally, we arrive at
                                the entrance of the National Park of Chã das
                                Caldeiras.
                                <br />
                                <br />
                                Here you get a stupendous view from the highest
                                point from Cape Verde and get the opportunity to
                                trek to the 2014 crater (Optional). You can find
                                places with extreme hot spots from the Sulfur. A
                                multi-colored landscape well worth a visit. The
                                trekking takes approximately 3 hours depending
                                on your shape. We visited one of the two
                                destroyed villages in the eruption of 2015.
                                Almost 98% of the houses, schools, restaurants,
                                hotels were decimated but people are coming
                                back, keen to rebuild everything again.
                                <br />
                                <br />
                                Lunch at Marisa house followed by wine tasting
                                the traditional Chã das Caldeiras wine better
                                known as Manecon. You also get the chance to buy
                                one of the best coffees in the
                            </article>
                        </div>
                        <div className="column">
                            <figure
                                className="image"
                                // style={{ width: "105.6%" }}
                            >
                                <img src="/img/b.png" />
                            </figure>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Servicos;
