import { i18n, Link, withTranslation } from "../i18n";
import PropTypes from "prop-types";

const Teste = ({ t }) => {
    return (
        <>
            <div>{t("title")}</div>
            <button type="button" onClick={() => i18n.changeLanguage("en")}>
                en
            </button>
            <button type="button" onClick={() => i18n.changeLanguage("pt")}>
                pt
            </button>
            <button type="button" onClick={() => i18n.changeLanguage("fr")}>
                fr
            </button>
        </>
    );
};

Teste.getInitialProps = async () => {
    const obj = { namespacesRequired: ["common"] };
    const currentLanguage = req ? req.language : i18n.language;
    console.log(currentLanguage);
    return obj;
};
// const currentLanguage = req ? req.language : i18n.language
Teste.propTypes = {
    t: PropTypes.func.isRequired
};

export default withTranslation("common")(Teste);
