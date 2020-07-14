// import ccocss from "./index.module.scss";
// const CreateComment = () => {
//     return (
//         <>
//             <article className="media">
//                 <figure className="media-left">
//                     <p className="image is-64x64">
//                         <img
//                             className="is-rounded"
//                             src="https://bulma.io/images/placeholders/128x128.png"
//                         />
//                     </p>
//                 </figure>
//                 <div className="media-content">
//                     <div className="field">
//                         <div className="control">
//                             {/* <textarea
//                                 className="textarea"
//                                 placeholder="Add a comment..."
//                             /> */}
//                             <form>
//                                 <input
//                                     className={ccocss.inp}
//                                     type="text"
//                                     placeholder="Join the discussion..."
//                                 />
//                             </form>
//                         </div>
//                     </div>
//                     {/* <nav className="level">
//                         <div className="level-left">
//                             <div className="level-item">
//                                 <a className="button is-info">Submit</a>
//                             </div>
//                         </div>
//                         <div className="level-right">
//                             <div className="level-item">
//                                 <label className="checkbox">
//                                     <input type="checkbox" /> Press enter to
//                                     submit
//                                 </label>
//                             </div>
//                         </div>
//                     </nav> */}
//                 </div>
//                 {/* <div className="media-right">
//                     <button type="submit" className="button">
//                         Comment
//                     </button>
//                 </div> */}
//             </article>
//         </>
//     );
// };

// export default CreateComment;

import ccocss from "./index.module.scss";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
// import { Router } from "express";

const CreateComment = ({ post, id }) => {
    // const router = useRouter();
    const { register, handleSubmit, reset } = useForm();
    // Cookies.get("username");
    const userId = Cookies.get("userId");
    console.log(`cookie userId: ${Cookies.get("username")}: ${Cookies}`);

    console.log(`
        Post:${post}
        ID:${id}
        userId:${userId}
        `);

    if (id == "post") {
        console.log(id);
    } else {
        console.log("else");
        console.log(id);
    }

    const submeter = async (data, e) => {
        if (!userId) {
            // Router.push("/auth/login");
        }

        alert(`
        comment:${data.comment}
        slug:${data.slug}
        `);

        const url = `${process.env.API_BASE_URL}/comentarios`;
        let response;
        if (id == "post") {
            alert(id);
            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    comment: data.comment,
                    user: userId,
                    post: post
                })
            });
        } else {
            alert(id);
            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    comment: data.comment,
                    user: userId,
                    experiencia: post
                })
            });
        }

        const dados = await response.json();

        e.target.reset();
    };

    return (
        <>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img className="is-rounded" src="/user.png" />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="field">
                        <div className="control">
                            {/* <textarea
                                className="textarea"
                                placeholder="Add a comment..."
                            /> */}
                            <form onSubmit={handleSubmit(submeter)}>
                                <input
                                    className={ccocss.inp}
                                    type="text"
                                    placeholder="Join the discussion..."
                                    name="comment"
                                    ref={register({
                                        requied: true,
                                        minLength: 6,
                                        maxLength: 50
                                    })}
                                />
                                <input
                                    type="hidden"
                                    name="slug"
                                    value="sqd-dqs"
                                />
                            </form>
                        </div>
                    </div>
                    {/* <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <a className="button is-info">Submit</a>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <label className="checkbox">
                                    <input type="checkbox" /> Press enter to
                                    submit
                                </label>
                            </div>
                        </div>
                    </nav> */}
                </div>
                {/* <div className="media-right">
                    <button type="submit" className="button">
                        Comment
                    </button>
                </div> */}
            </article>
        </>
    );
};

export default CreateComment;
