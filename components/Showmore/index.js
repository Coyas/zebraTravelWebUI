import shcss from "./index.module.scss";
// import Link from "next/link";
import { Link, withTranslation } from "../../i18n";

const Showmore = ({ t }) => {
    return (
        <>
            <p className={shcss.btnShowmore}>
                <Link href="">
                    <a className={"button " + shcss.showmore}>{t("show")}</a>
                </Link>
            </p>
        </>
    );
};
export default withTranslation("experiencia")(Showmore);
