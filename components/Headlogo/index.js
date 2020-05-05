import hcss from "./index.module.scss";
import Link from "next/link";

const Headlogo = () => {
    return (
        <>
            <div className={"container " + hcss.headlogo}>
                <div className="columns">
                    <div className={"column " + hcss.borda}>
                        <Link href="/">
                            <a>
                                <figure className="image">
                                    <img src="img/zebralogo3.svg" />
                                </figure>
                            </a>
                        </Link>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        </>
    );
};

export default Headlogo;
