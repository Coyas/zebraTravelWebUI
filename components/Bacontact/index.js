import bcss from "./index.module.scss";
import Link from "next/link";

const Bacontact = () => {
    return (
        <>
            <div className={bcss.it}>
                <div className={bcss.boxAdd}>
                    <Link href="tel:002382813373">
                        <a>+|238| 281 33 73</a>
                    </Link>
                    <br />
                    <Link href="mailto:info@zebratravel.net">
                        <a>info@zebratravel.net</a>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Bacontact;
