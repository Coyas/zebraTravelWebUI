import hcss from "./index.module.scss";
import Link from "next/link";
import Bacontact from "../Bacontact";

const Headlogo = (props) => {
    return (
        <>
            <div className={"container " + hcss.headlogo}>
                <div className="column is-half">
                    <Bacontact />
                </div>
                <div className="columns">
                    <div
                        className={"column " + hcss.borda}
                        style={{
                            height: props.height,
                            marginTop: props.marginTop
                        }}
                    >
                        <Link href="/">
                            <a>
                                <figure
                                    className="image"
                                    style={{
                                        position: props.position,
                                        width: props.width,
                                        top: props.top,
                                        left: props.left
                                    }}
                                >
                                    <img src="/img/zebralogo3.svg" />
                                </figure>
                            </a>
                        </Link>
                    </div>
                    <div className="column">{props.children}</div>
                </div>
            </div>
        </>
    );
};

export default Headlogo;
