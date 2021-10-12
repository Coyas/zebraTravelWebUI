import carou from "./index.module.scss";
import Image from "next/image";

const Carousel = () => {
    const currentSlide = () => {
        console.log("teste de carousel");
    };
    return (
        <>
            <div className={carou.slideshowContainer}>
                <div className={carou.mySlides + " " + carou.fade}>
                    <Image
                        className={carou.img}
                        src={"/img/a.png"}
                        alt="Picture of the author"
                        width="100"
                        height="100"
                    />
                </div>

                <div className={carou.mySlides + " " + carou.fade}>
                    <Image
                        className={carou.img}
                        src={"/img/praia.png"}
                        alt="Picture of the author"
                        width="100"
                        height="100"
                    />
                </div>

                <div className={carou.mySlides + " " + carou.fade}>
                    <Image
                        className={carou.img}
                        src={"/img/a.png"}
                        alt="Picture of the author"
                        width="100"
                        height="100"
                    />
                </div>
            </div>

            <div className="dotBox" style={{ textAlign: "center" }}>
                <span className="dot" onClick={currentSlide(1)}></span>
                <span className="dot" onClick={currentSlide(2)}></span>
                <span className="dot" onClick={currentSlide(3)}></span>
            </div>
        </>
    );
};

export default Carousel;
