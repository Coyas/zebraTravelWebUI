import expid from "../styles/expid.module.scss";
import Layout from "../../components/layout";
import Zebralistras from "../../components/Zebralistras";
import Bacontact from "../../components/Bacontact";
import Headlogo from "../../components/Headlogo";
import Divisor from "../../components/Divisor";
import Link from "next/link";
import Like from "../../components/Like";
import Hr from "../../components/Hr";

const Expid = () => {
    return (
        <Layout>
            <Zebralistras />
            <div className="container">
                <div className="column is-half">
                    <Bacontact />
                </div>
            </div>
            <Headlogo />

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
                    <div className="column">
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
                                <Link href="">
                                    <a>
                                        <i className="fas fa-share-alt"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <button className={"button " + expid.plus}>
                            <span className="icon">
                                <i className="fas fa-plus"></i>
                            </span>
                        </button>
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
                                            <span className="icon is-small is-left">
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
                                        <span className="icon is-small is-left">
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
            </section>
        </Layout>
    );
};

export default Expid;
