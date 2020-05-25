import expid from "../styles/expid.module.scss";
import Layout from "../../components/layout";
import Zebralistras from "../../components/Zebralistras";
import Headlogo from "../../components/Headlogo";
import Divisor from "../../components/Divisor";
import Link from "next/link";
import Like from "../../components/Like";
import Hr from "../../components/Hr";
import Comments from "../../components/Comments";
import BooknowList from "../../components/BooknowList";
import Modal from "react-modal";
import { useState } from "react";
import Galeria from "../../components/Galeria";

const customStyles = {
    content: {
        top: "0%",
        left: "0%",
        width: "100%",
        backgroundColor: "#a59f92",
        border: "unset",
        height: "100vh",
        zIndex: "10",
        overflowX: "hidden"
    }
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

const Expid = () => {
    const [ModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        // let navbar = document.getElementsByClassName(".navbar_nav__dIn_x");
        let navbar = document.querySelector(".navbar_nav__dIn_x");
        navbar.classList.add("hide");

        setIsOpen(true);
    }
    function closeModal() {
        let navbar = document.querySelector(".navbar_nav__dIn_x");
        if (navbar.classList.contains("hide")) {
            navbar.classList.remove("hide");
        }
        setIsOpen(false);
    }

    return (
        <Layout>
            <Zebralistras />

            <Headlogo marginHead="2%" />

            <Divisor
                title="Experiências Turísticas"
                voltar="true"
                sobre="EXPLORAR"
            />

            <section className={"container " + expid.expid}>
                <h1>Nature, History of SANTO ANTÃO</h1>
                <p>
                    <span className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </span>
                    Santo Antão, Porto Novo
                </p>
                <div className="columns">
                    <div className={"column " + expid.imgbox}>
                        <div className={expid.container2}>
                            <figure className="image">
                                <img
                                    src="/img/esplanada.png"
                                    className={expid.imgs}
                                />
                            </figure>
                            <div className={expid.bottomLeft}>
                                <p>
                                    <Like />
                                </p>
                            </div>
                            <div className={expid.topRight}>
                                <Link href="https://www.addtoany.com/share">
                                    <a
                                        class="a2a_dd"
                                        href="https://www.addtoany.com/share"
                                    >
                                        <i className="fas fa-share-alt"></i>
                                    </a>
                                </Link>
                                <script>
                                    var a2a_config = a2a_config || {};
                                    a2a_config.onclick = 1;
                                </script>
                            </div>
                        </div>

                        <button
                            onClick={openModal}
                            className={"button " + expid.plus}
                        >
                            <span className="icon">
                                <i className="fas fa-plus"></i>
                            </span>
                        </button>
                        <Modal
                            isOpen={ModalIsOpen}
                            style={customStyles}
                            contentLabel="Example Modal"
                            onRequestClose={closeModal}
                            shouldCloseOnOverlayClick={false}
                        >
                            <div className="section">
                                <div className="container">
                                    <div className="columns is-mobile ">
                                        <div
                                            className={
                                                "column is-half is-offset-one-quarter is-centered " +
                                                expid.center
                                            }
                                        >
                                            <a
                                                onClick={closeModal}
                                                className={expid.branco}
                                            >
                                                <span className="icon">
                                                    <img src="/img/voltar.png" />
                                                </span>
                                                Voltar
                                            </a>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="column is-mobile">
                                            <Galeria />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="column">
                        <div className={"box " + expid.boxcheck}>
                            <p className={expid.hr}>
                                <Hr height="2" opacity="1" cor="#6bc1fd" />
                            </p>
                            <div className="columns">
                                <div className="column">
                                    <p>
                                        <h1>Select Date and Travelers</h1>
                                    </p>
                                </div>
                                <div className="column is-one-third">
                                    <div className={expid.boxbo}>
                                        <p className={expid.from}>from</p>
                                        <p className={expid.preco}>
                                            CVE 11,027
                                        </p>
                                        <p>
                                            <span>
                                                (Price varies by group size)
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"columns " + expid.secun}>
                                <div className="column">
                                    <div className="field is-grouped">
                                        <div className="control has-icons-left has-icons-right">
                                            <input
                                                className="input is-success"
                                                type="date"
                                                placeholder="Choose a date"
                                            />
                                            <span className="icon is-small is-left Dzindex">
                                                <i class="far fa-calendar-alt"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="control has-icons-left has-icons-right">
                                        <input
                                            className="input is-success"
                                            type="number"
                                            min="0"
                                            placeholder="How many travelers"
                                        />
                                        <span className="icon is-small is-left Dzindex">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="control">
                                <button className={"button " + expid.btn}>
                                    Check Availability
                                </button>
                            </div>
                            <div className={"columns " + expid.icons}>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            Distance
                                        </div>
                                        <div className={expid.itemc}>32 km</div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="far fa-image"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            Elevation
                                        </div>
                                        <div className={expid.itemc}>
                                            2371 m
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="far fa-hourglass"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            Duration
                                        </div>
                                        <div className={expid.itemc}>24 h</div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className={expid.grid}>
                                        <div className={expid.itema}>
                                            <span className="icon">
                                                <i className="far fa-user"></i>
                                            </span>
                                        </div>
                                        <div className={expid.itemb}>
                                            Languages
                                        </div>
                                        <div className={expid.itemc}>
                                            PT EN FR IT
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"columns " + expid.sec2}>
                    <dic className="column">
                        <Comments />
                    </dic>
                    <dic className="column">
                        <div className={expid.Descri}>
                            <h1 className="">What to Expect</h1>
                            <Hr height="1" opacidade="1" cor="#000000" />
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
                                drop-by-drop
                                <br />
                                irrigation method is used (a technique adopted
                                by farms on the island in order to minimize the
                                effect of
                                <br />
                                drought). We then continue to Achada Furna, a
                                chance to see the communities where new houses
                                were
                                <br />
                                built after the eruption of 1995 and 2014 for
                                the population of Chã das Caldeiras. Many of the
                                locals have
                                <br />
                                now returned to the Caldeira. Continuing on, we
                                stop in Cabeça Fundão where we can see the old
                                craters
                                <br />
                                and the wonderful mixed colors in the landscape.
                                Finally, we arrive at the entrance of the
                                National Park of
                                <br />
                                Chã das Caldeiras.
                                <br />
                                <br />
                                Here you get a stupendous view from the highest
                                point from Cape Verde and get the opportunity to
                                trek
                            </article>
                        </div>

                        <div className={expid.exlist}>
                            <Hr height="1" opacidade="1" cor="#000000" />
                            <BooknowList />
                        </div>
                    </dic>
                </div>
            </section>
        </Layout>
    );
};

export default Expid;
