import excss from "../styles/experiencia.module.scss";
import Layout from "../../components/layout";
import Headlogo from "../../components/Headlogo";
import Zebralistras from "../../components/Zebralistras";
import Divisor from "../../components/Divisor";
import Explorebox from "../../components/Explorebox";
import Experencia from "../../components/Experencia";
import Showmore from "../../components/Showmore";

const Experiencia = () => {
    return (
        <>
            <Layout>
                <Zebralistras />

                <Headlogo marginHead="15%" />

                <Divisor
                    title="Experiências Turísticas"
                    voltar="false"
                    sobre="EXPLORAR"
                />

                <section className="container">
                    <div className="columns is-desktop">
                        <div className={"column " + excss.col}>
                            <Explorebox />
                        </div>
                        <div className="column">
                            <Experencia />
                            <Experencia />
                            <Experencia />
                            <Showmore />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Experiencia;
