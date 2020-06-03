import bcss from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Bacontact = () => {
    const router = useRouter();
    console.log(router.pathname);
    let it2 = "";
    if (
        router.pathname == "/experiencias" ||
        router.pathname == "/experiencias/[id]" ||
        router.pathname == "/post/" ||
        router.pathname == "/post/[id]"
    ) {
        it2 = bcss.it2;
    }

    return (
        <>
            <div className={bcss.it + " " + it2}>
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
