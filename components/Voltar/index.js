import vcss from "./index.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Voltar = () => {
    const { t } = useTranslation("experiencia");
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

export default Voltar;
