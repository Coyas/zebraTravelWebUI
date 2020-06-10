import excss from "../styles/experiencia.module.scss";
import Layout from "../../components/layout";
import Headlogo from "../../components/Headlogo";
import Zebralistras from "../../components/Zebralistras";
import Divisor from "../../components/Divisor";
import Explorebox from "../../components/Explorebox";
import Experencia from "../../components/Experencia";
import Showmore from "../../components/Showmore";
import { withTranslation } from "../../i18n";

const Experiencia = ({ t }) => {
    return (
        <>
            <Layout>
                <Zebralistras />

                <Headlogo marginHead="15%" />

                <Divisor title={t("expTu")} voltar="false" sobre={t("exp")} />

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

Experiencia.getInitialProps = async () => {
    const obj = { namespacesRequired: ["experiencia", "footer", "navbar"] };

    return obj;
};

export default withTranslation("experiencia")(Experiencia);
