import vcss from "./index.module.scss";
import Link from "next/link";
import { withTranslation } from "../../i18n";

const Voltar = ({ t }) => {
    return (
        <>
            <p className={vcss.voltar}>
                <Link href="/experiencias">
                    <a>
                        <span className="icon">
                            <img src="/img/voltar.png" />
                        </span>
                        {t("voltar")}
                    </a>
                </Link>
            </p>
        </>
    );
};

export default withTranslation("experiencia")(Voltar);
