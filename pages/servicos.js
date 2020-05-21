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
                >
                    <figure className="image" style={{ width: "100%" }}>
                        <img src="/img/a.png" style={{ height: "39vh" }} />
                    </figure>
                </Headlogo>
                <section className={"container is-fluid " + sescss.servico}>
                    <div className="columns is-Desktop">
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
            </Layout>
        </>
    );
};

export default Servicos;
