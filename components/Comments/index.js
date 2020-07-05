import cocss from "./index.module.scss";
import Hr from "../Hr";
import ComentItem from "../ComentItem";
import CreateComment from "../CreateComment";
import { withTranslation } from "../../i18n";

const Comments = ({ t, comment }) => {
    console.log("comment ms");
    console.log(comment);
    return (
        <>
            <div className={cocss.boxs}>
                <h1>{t("coment")}</h1>
                <Hr height="1" opacidade="1" cor="#000000" />
                <CreateComment />
                <ComentItem
                    image="{user.image}"
                    username="{`${process.env.API_BASE_URL}${user?.username}`}"
                    hora="{comment.created_at}"
                    comment="{comment.comment}"
                />
            </div>
        </>
    );
};

export default withTranslation("experiencia")(Comments);
