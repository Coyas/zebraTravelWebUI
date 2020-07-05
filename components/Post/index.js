import polcss from "./index.module.scss";
import Link from "next/link";
import { i18n, withTranslation } from "../../i18n";
import api from "../../lib/api";
// import { useState } from "react";
const Postlist = ({ t }) => {
    const { response, error, isLoading } = api("/api/postis");
    // const [count, setCount] = useState(1);

    // if (!isLoading) {
    //     console.log("response post list");
    //     console.log(response);
    //     alert("ver console");
    // }

    const item = (
        <div className={polcss.itembox}>
            <div className={polcss.exbox}>
                <div className={polcss.inbox}>
                    <p>{t("pltitle")}</p>
                    {/* <Link href="/post/[id]" as={`/post/test-de-title`}> */}
                    <a>Learn More</a>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );

    const itemBox = ["", "", item, "", "", "", "", ""];
    const listcss = [
        polcss.item0,
        polcss.item1,
        polcss.item2,
        polcss.item3,
        polcss.item4,
        polcss.item5,
        polcss.item6
    ];

    // console.log("itemBox[2]");
    // console.log(itemBox[2]);
    // console.log("itemBox[0]");
    // console.log();

    return (
        <>
            <div className={polcss.boxfoto}>
                {/* {item} */}
                {!isLoading &&
                    response.map((post, index) => (
                        <>
                            <div className={polcss.item + " " + listcss[index]}>
                                <Link
                                    href="/post/[id]"
                                    as={`/post/${post.slug}`}
                                >
                                    <a>
                                        <img
                                            src={`${process.env.API_BASE_URL}${post.imagem?.url}`}
                                        />
                                    </a>
                                </Link>
                            </div>
                            {itemBox[index]}
                        </>
                    ))}
            </div>
        </>
    );
};

export default withTranslation("post")(Postlist);
