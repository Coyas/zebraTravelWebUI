import cocss from "./index.module.scss";
import Hr from "../Hr";
import ComentItem from "../ComentItem";
import CreateComment from "../CreateComment";
import api from "../../lib/api";
// import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

//post = postID
const Comments = ({ post, id }) => {
    const { t } = useTranslation("experiencia");

    const { response, isLoading } = api(
        `/api/comentario?post=${post}&id=${id}`
    );

    return (
        <>
            <div className={cocss.boxs}>
                <h1>{t("coment")}</h1>
                <Hr height="1" opacidade="1" cor="#000000" />
                <CreateComment post={post} id={id} />
                {!isLoading &&
                    response.map((value, index) => {
                        // if (index < count) {
                        return (
                            <ComentItem
                                key={index}
                                avatar={
                                    value?.user?.avatar
                                        ? `${process.env.API_BASE_URL}${value?.user?.avatar?.url}`
                                        : `/user.png`
                                }
                                user={value?.user?.username}
                                hora={value?.created_at}
                                comment={value?.comment}
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
