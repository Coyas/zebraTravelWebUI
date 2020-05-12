import lcss from "./index.module.scss";
import Link from "next/link";

const Like = () => {
    return (
        <>
            <Link href="sss">
                <a className={lcss.expa}>
                    <span className="margi">124k</span>
                    <span className="icon">
                        <i className="far fa-heart"></i>
                    </span>
                </a>
            </Link>
        </>
    );
};

export default Like;
