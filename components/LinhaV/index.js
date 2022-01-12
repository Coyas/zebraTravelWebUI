import api from "../../lib/api";
import indexcss from "../../pages/styles/index.module.scss";

const LinhaV = () => {
    const { response, error, isLoading } = api("/api/links");
    return (
        <div className={indexcss.colunaIcon}>
            <div className={indexcss.linha1}></div>
            <div className={indexcss.Ticons}>
                <a href={response?.facebook} target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href={response?.instagram} target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href={response?.youtube} target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
            <div className={indexcss.linha2}></div>
        </div>
    );
};

export default LinhaV;
