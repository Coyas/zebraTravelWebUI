import GaleriaImage from "../GaleriaImage";
import cssgal from "./index.module.scss";
import { useState } from "react";

const Galeria = ({ images }) => {
    const local = images.local.split(",");

    let propertiess = images.imagens.map((item, index) => {
        return {
            id: item.id,
            index: index,
            title: local[0] || " ",
            subtitle: local[1] || " ",
            imagem: item.url
        };
    });

    const [properties, setProperties] = useState(propertiess); // array de propriedades
    const [property, setProperty] = useState(propertiess[0]); // propriedade individual

    // console.log("data.properties");
    // console.log(property);

    // console.log(`property length: ${property}`);
    // console.log(`properties length: ${properties}`);

    const nextProperty = () => {
        const newIndex = property.index + 1;

        setProperty(properties[newIndex]);
    };
    const prevProperty = () => {
        const newIndex = property.index - 1;

        setProperty(properties[newIndex]);
    };

    return (
        <>
            <div className={cssgal.galeria}>
                <button
                    className={cssgal.prev}
                    onClick={() => prevProperty()}
                    disabled={property.index === 0}
                >
                    <span>ES</span>
                </button>
                <button
                    className={cssgal.next}
                    onClick={() => nextProperty()}
                    disabled={property.index === propertiess.length - 1}
                >
                    <span>DR</span>
                </button>
                <div
                    className={
                        cssgal.cardSlider +
                        " activeSlide" +
                        `_${property.index}`
                    }
                >
                    <div
                        className={cssgal.cardSlider_wraper}
                        style={{
                            transform: `translateX(-${
                                property.index * (100 / properties.length)
                            }%)`
                        }}
                    >
                        {properties.map((property) => (
                            <GaleriaImage
                                key={property.id}
                                property={property}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Galeria;
