import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import indexcss from "../../pages/styles/index.module.scss";

const LinhaV = () => {
    const { data, error } = useSWR(
        `${process.env.API_BASE_URL}/links-social`,
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div className={indexcss.colunaIcon}>
            <div className={indexcss.linha1}></div>
            <div className={indexcss.Ticons}>
                <a href={data.data.attributes.facebook} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href={data.data.attributes.instagram} target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href={data.data.attributes.youtube} target="_blank">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            <div className={indexcss.linha2}></div>
        </div>
    );
};

export default LinhaV;
