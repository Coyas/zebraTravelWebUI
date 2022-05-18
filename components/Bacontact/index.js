import bcss from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
// import api from "../../lib/api";

const Bacontact = ({ contatoDados }) => {
    // const { response } = api("/api/contato");

    // return null;
    let phone;

    phone = contatoDados.data.attributes.phone?.replace(/ /g, "");
    // console.log("contatoDados respo");
    // console.log(contatoDados);

    const router = useRouter();

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
                    <a href={"tel:00238" + phone}>
                        {" "}
                        +|238| {contatoDados.data.attributes.phone}
                    </a>
                    <br />
                    <a href={"mailto:" + contatoDados.data.attributes.email}>
                        {contatoDados.data.attributes.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Bacontact;
