import excss from "./styles/experiencia.module.scss";
import Link from "next/link";
import Layout from "../components/layout";
import Headlogo from "../components/Headlogo";
import Bacontact from "../components/Bacontact";
import Zebralistras from "../components/Zebralistras";
import Divisor from "../components/Divisor";
import Explorebox from "../components/Explorebox";
import Experencia from "../components/Experencia";

const Experiencia = () => {
    return (
        <>
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
                    voltar="false"
                    sobre="EXPLORAR"
                />

                <section className="container">
                    <div className="columns">
                        <div className={"column " + excss.col}>
                            <Explorebox />
                        </div>
                        <div className="column">
                            <Experencia />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Experiencia;
