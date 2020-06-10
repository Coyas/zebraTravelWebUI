import GaleriaImage from "../GaleriaImage";
import cssgal from "./index.module.scss";
import data from "../../public/data/data";
import { useState } from "react";

const Galeria = () => {
    const [properties, setProperties] = useState(data.properties); // array de propriedades
    const [property, setProperty] = useState(data.properties[0]); // propriedade individual

    console.log(`property length: ${property}`);
    console.log(`properties length: ${properties}`);

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
                    disabled={property.index === data.properties.length - 1}
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
