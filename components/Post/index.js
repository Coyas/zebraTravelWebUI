import polcss from "./index.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
// import api from "../../lib/api";
import React from "next";
// import { useState } from "react";
const Postlist = ({ postlists }) => {
    const { t } = useTranslation("post");
    // const { response, error, isLoading } = api("/api/postis");

    // console.log("response post from posts");
    // console.log(postlists.data);
    // postlists.data.map((post, index) => {
    //     console.log("response post from posts");
    //     console.log(post.attributes.imagem.data.attributes.url);
    // });
    // console.log("response post from posts fim");
    // return null;
    // let postarray = [];
    // if (!postlists) {
    //     return <p>nenhum dados ca teni</p>;
    // }
    // postlists?.data?.map((value, index) => {
    //     postarray[index] = {
    //         index: index,
    //         slug: value.attributes.slug,
    //         url: value.attributes.imagem.data.attributes.url,
    //         hash: value.attributes.imagem.data.attributes.hash
    //     };
    // });

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

    return (
        <>
            <div className={polcss.boxfoto}>
                {postlists?.data?.map((post, index) => (
                    <div key={index}>
                        <div className={polcss.item + " " + listcss[index]}>
                            <Link
                                href={`/post/${encodeURIComponent(
                                    post.attributes.slug
                                )}`}
                                // as={`/posts/${post.attributes.slug}`}
                            >
                                <a>
                                    <img
                                        src={`${post.attributes.imagem.data.attributes.url}`}
                                        alt={`${post.attributes.imagem.data.attributes.hash}`}
                                    />
                                </a>
                            </Link>
                        </div>
                        {itemBox[index]}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Postlist;
