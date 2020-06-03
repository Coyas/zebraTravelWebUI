import Link from "next/link";
import divi from "./divisor.module.scss";
import Hr from "../Hr";
import Voltar from "../Voltar";

const Divisor = (props) => {
    let Qual;
    console.log("props: " + props.voltar);

    if (props.voltar === "true") {
        Qual = <Voltar />;
        console.log("true");
    } else {
        Qual = <Hr height="2" opacidade="1" cor={props.cores} />;
        console.log("false");
    }
    return (
        <>
            <div className={"container " + divi.boxi}>
                <div className="columns">
                    <div className={"column " + divi.col}>
                        <h1>
                            {props.title} <span>{props.sutitle}</span>
                        </h1>
                        <p className={divi.sobre}>
                            <a>
                                <span>
                                    <img src="/img/flexa.svg" />
                                </span>
                                {props.sobre}
                            </a>
                        </p>
                    </div>
                    <div className={"column " + divi.qual}>{Qual}</div>
                </div>
            </div>
        </>
    );
};

export default Divisor;
