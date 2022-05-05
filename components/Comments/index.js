import cocss from "./index.module.scss";
import Hr from "../Hr";
import ComentItem from "../ComentItem";
import CreateComment from "../CreateComment";
// import api from "../../lib/api";
// import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

//post = postID
const Comments = ({ post, id }) => {
    const { t } = useTranslation("experiencia");

    // const { response, isLoading } = api(
    //     `/api/comentario?post=${post}&id=${id}`
    // );

    // console.log("comment id ss");
    // console.log(post.data.attributes.comentarios.data[0]);
    // console.log(post.data.attributes);
    //console.log("comment <post>");
    //console.log(post);
    //console.log("comment <id>");
    // console.log(id);

    // ?.data

    return (
        <>
            <div className={cocss.boxs}>
                <h1>{t("coment")}</h1>
                <Hr height="1" opacidade="1" cor="#000000" />
                <CreateComment post={post} id={id} />
                {post.data.attributes.comentarios.data.map((value, index) => {
                    // aqui post vira comentarios
                    // if (index < count) {
                    return (
                        <ComentItem
                            key={index}
                            // value?.attributes.user?.avatar
                            //     ? `${process.env.API_BASE_URL}${value?.attributes.user?.avatar?.url}`
                            //     :
                            avatar={value?.attributes.avatar}
                            user={value?.user?.username}
                            hora={value?.attributes.publishedAt}
                            comment={value?.attributes.comment}
                        />
                    );
                    // }
                })}
                {/* <a onClick={GetDados}>Show More</a> */}
            </div>
        </>
    );
};

export default Comments;
