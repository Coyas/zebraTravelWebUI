import bcss from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../lib/api";

const Bacontact = () => {
    const { response } = api("/api/contato");

    const phone = response?.phone.replace(/ /g, "");

    const router = useRouter();
    // console.log(router.pathname);
    let it2 = "";
    if (
        router.pathname == "/experiencias" ||
        router.pathname == "/experiencias/[id]" ||
        router.pathname == "/post" ||
        router.pathname == "/post/[id]" ||
        router.pathname == "/404"
    ) {
        it2 = bcss.it2;
    }

    return (
        <>
            <div className={bcss.it + " " + it2}>
                <div className={bcss.boxAdd}>
                    <a href={"tel:00238" + phone}>+|238| {response?.phone}</a>
                    <br />
                    <a href={"mailto:" + response?.email}>{response?.email}</a>
                </div>
            </div>
        </>
    );
};
export default Bacontact;
