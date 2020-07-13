import cocss from "./index.module.scss";
import Hr from "../Hr";
import ComentItem from "../ComentItem";
import CreateComment from "../CreateComment";
import { withTranslation } from "../../i18n";
import api from "../../lib/api";

//post = postID
const Comments = ({ t, post, id }) => {
    const { response, isLoading } = api(
        `/api/comentario?post=${post}&id=${id}`
    );

    return (
        <>
            <div className={cocss.boxs}>
                <h1>{t("coment")}</h1>
                <Hr height="1" opacidade="1" cor="#000000" />
                <CreateComment />
                {!isLoading &&
                    response.map((value) => (
                        <ComentItem
                            avatar={
                                value.user.avatar
                                    ? `${process.env.API_BASE_URL}${value?.user?.avatar?.url}`
                                    : `/user.png`
                            }
                            user={value?.user?.username}
                            hora={value?.created_at}
                            comment={value?.comment}
                        />
                    ))}
            </div>
        </>
    );
};

export default withTranslation("experiencia")(Comments);
