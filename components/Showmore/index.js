import shcss from "./index.module.scss";
import Link from "next/link";

const Showmore = () => {
    return (
        <>
            <p className={shcss.btnShowmore}>
                <Link href="">
                    <a className={"button " + shcss.showmore}>
                        SHOW MORE RESULT
                    </a>
                </Link>
            </p>
        </>
    );
};
export default Showmore;
