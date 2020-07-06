import cocss from "./index.module.scss";
import Hr from "../Hr";
import ComentItem from "../ComentItem";
import CreateComment from "../CreateComment";
import { withTranslation } from "../../i18n";
import api from "../../lib/api"

//post = postID
const Comments = ({ t, post}) => {
    const {response, isLoading} = api(`/api/comentario?post=${post}`)
    console.log("comment postid");
    console.log(post);
const a=null
    console.log("response")
    console.log(a || '/uploads/imagem.git')
    return (
        <>
            <div className={cocss.boxs}>
                <h1>{t("coment")}</h1>
                <Hr height="1" opacidade="1" cor="#000000" />
                <CreateComment />
                {!isLoading && response.map((value) => (
                    <ComentItem
                        avatar={ value.user.avatar ? `${process.env.API_BASE_URL}${value?.user?.avatar?.url}`  : `/user.png`}
                        user={value?.user?.username}
                        hora={value?.created_at}
                        comment={value?.comment}
                    />
                    // <p>{value.id}</p>
                ))}
            </div>
        </>
    );
};

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`${process.env.API_BASE_URL}/comentarios?post=1`)
//     const data = await res.json()

//     console.log("data")
//     console.log(data)
  
//     // Pass data to the page via props
//     return { props: { data } }
//   }
// Comments.getInitialProps = async (ctx) => {
//     const res = await fetch(`${process.env.API_BASE_URL}/comentarios?post=1`)
//     const json = await res.json()
//     return { data: json }
// }

export default withTranslation("experiencia")(Comments);
