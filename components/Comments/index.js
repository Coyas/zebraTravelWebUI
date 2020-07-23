import cocss from "./index.module.scss";
import Hr from "../Hr";
import ComentItem from "../ComentItem";
import CreateComment from "../CreateComment";
import { withTranslation } from "../../i18n";
import api from "../../lib/api";
import { useEffect, useState } from "react";

//post = postID
const Comments = ({ t, post, id }) => {
    const { response, isLoading } = api(
        `/api/comentario?post=${post}&id=${id}`
    );

    // console.log("response sima cre");
    // console.log(response);

    // const [dados, setDados] = useState([]);
    // const [count, setCount] = useState(7);
    // // setDados([...response, {}]);

    // let GetDados;
    // if (!isLoading) {
    //     GetDados = () => {
    //         setDados((dados) => [...dados, response]);

    //         console.log("count dados");
    //         console.log(dados);
    //         setCount(count + 5);
    //     };
    // }

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

export default withTranslation("experiencia")(Comments);
