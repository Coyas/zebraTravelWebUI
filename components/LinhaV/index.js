import indexcss from "../../pages/styles/index.module.scss";

const LinhaV = ({ dados }) => {
    return (
        <div className={indexcss.colunaIcon}>
            <div className={indexcss.linha1}></div>
            <div className={indexcss.Ticons}>
                <a href={dados.data.attributes.facebook} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href={dados.data.attributes.instagram} target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href={dados.data.attributes.youtube} target="_blank">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            <div className={indexcss.linha2}></div>
        </div>
    );
};

export default LinhaV;
