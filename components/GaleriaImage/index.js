import gimgcss from "./index.module.scss";

const GaleriaImage = ({ property }) => {
    const { imagem, title, subtitle, index } = property;

    return (
        <>
            <div id={"card" + `_${index}`} className={gimgcss.card}>
                <figure class="image">
                    <img
                        className=""
                        src={imagem}
                        style={{
                            height: "77vh",
                            borderRadius: "25px"
                        }}
                    />
                </figure>
                <h1 className="title">{title}</h1>
                <h1 className="subtitle" style={{ color: "#979ca8" }}>
                    {subtitle}
                </h1>
            </div>
        </>
    );
};

export default GaleriaImage;
