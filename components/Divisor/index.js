import Link from "next/link";
import divi from "./divisor.module.scss";
import Hr from "../Hr";
const Divisor = (props) => {
    return (
        <>
            <div className={"container " + divi.boxi}>
                <div class="columns">
                    <div class="column">
                        <h1>
                            {props.title} <span>{props.sutitle}</span>
                        </h1>
                        <p className={divi.sobre}>
                            <a>
                                <span>
                                    <img src="/img/flexa.svg" />
                                </span>
                                SOBRE NÓS
                            </a>
                        </p>
                    </div>
                    <div class="column">
                        <Hr height="2" opacidade="1" cor={props.cores} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Divisor;
