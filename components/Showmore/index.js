import shcss from "./index.module.scss";
import Link from "next/link";

const Showmore = () => {
    return (
        <>
            <p className={shcss.btnShowmore}>
                <button className={"button " + shcss.showmore}>
                    SHOW MORE RESULT
                </button>
            </p>
        </>
    );
};
export default Showmore;
