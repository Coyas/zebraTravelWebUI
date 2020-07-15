import ccocss from "./index.module.scss";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

const CreateComment = ({ post, id }) => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    // Cookies.get("username");
    const userId = Cookies.get("userId");
    const jwt = Cookies.get("jwt");
    // console.log(`cookie userId: ${Cookies.get("username")}`);

    // console.log(`
    //     Post:${post}
    //     ID:${id}
    //     userId:${userId}
    //     Json Web Token: ${jwt}
    //     `);

    // if (id == "post") {
    //     console.log("if id");
    //     console.log(id);
    // } else {
    //     console.log("else id");
    //     console.log(id);
    // }

    const submeter = async (data, e) => {
        // alert(`
        // comment:${data.comment}
        // Json Web Token: ${jwt}
        // `);

        const url = `${process.env.API_BASE_URL}/comentarios`;
        let response;
        if (id == "post") {
            // alert(`
            // ID: ${id}
            // comment: ${data.comment},
            // user: ${userId},
            // experiencia: ${post},
            // Json Web Token: ${jwt}
            // `);
            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`
                },
                body: JSON.stringify({
                    comment: data.comment,
                    user: userId,
                    post: post
                })
            });
        } else {
            // alert(`
            // ID: ${id}
            // comment: ${data.comment},
            // user: ${userId},
            // experiencia: ${post},
            // Json Web Token: ${jwt}
            // `);
            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`
                },
                body: JSON.stringify({
                    comment: data.comment,
                    user: userId,
                    experiencia: post
                })
            });
        }

        // console.log("response");
        // console.log(response);
        const dados = await response.json();
        // console.log("dados:");
        // console.log(dados);

        // console.log("dados.statusCode");
        // console.log(dados.statusCode);

        if (dados.statusCode == 401) {
            console.log(router.query);
            const url = router.pathname;
            const { id } = router.query;
            const uri = url.replace("[id]", id);
            // console.log("url");
            // console.log(url);
            console.log(uri);
            // console.log("url id");
            // console.log(id);
            router.push(`/auth/login?redirect=1&url=${uri}`);
        }

        if (response.status == 200 && response.ok) {
            e.target.reset();
            // router.reload();
        }
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
                                        maxLength: 300
                                    })}
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
