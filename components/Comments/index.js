import cocss from "./index.module.scss";
import Hr from "../Hr";
import ComentItem from "../ComentItem";
import CreateComment from "../CreateComment";
import { withTranslation } from "../../i18n";

const Comments = ({ t }) => {
    return (
        <>
            <div className={cocss.boxs}>
                <h1>{t("coment")}</h1>
                <Hr height="1" opacidade="1" cor="#000000" />
                <CreateComment />
                <ComentItem
                    image="https://bulma.io/images/placeholders/128x128.png"
                    username="John Smith"
                    hora="22 days ago"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ornare magna eros, eu pellentesque
                            tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis."
                />
                <ComentItem
                    image="https://bulma.io/images/placeholders/128x128.png"
                    username="John Smith"
                    hora="22 days ago"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ornare magna eros, eu pellentesque
                            tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis."
                />
                <ComentItem
                    image="https://bulma.io/images/placeholders/128x128.png"
                    username="John Smith"
                    hora="22 days ago"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ornare magna eros, eu pellentesque
                            tortor vestibulum ut. Maecenas non massa sem. Etiam
                            finibus odio quis feugiat facilisis."
                />
            </div>
        </>
    );
};

export default withTranslation("experiencia")(Comments);
