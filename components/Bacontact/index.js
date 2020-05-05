import bcss from "./index.module.scss";
import Link from "next/link";

const Bacontact = () => {
    return (
        <>
            <div className={bcss.it}>
                <div className={bcss.boxAdd}>
                    <a href="tel:002382813373">+|238| 281 33 73</a>
                    <br />
                    <a href="mailto:info@zebratravel.net">
                        info@zebratravel.net
                    </a>
                </div>
            </div>
        </>
    );
};
export default Bacontact;
