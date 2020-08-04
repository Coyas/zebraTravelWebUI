import lcss from "./index.module.scss";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
import Cookies from "js-cookie";

const Like = (props) => {
    console.log(props);
    const [like, setLikes] = useState(false);

    const userId = Cookies.get("username");

    const op = props.likes;
    console.log("op");
    console.log(op);
    let likes;
    switch (true) {
        case op < 1000: {
            likes = op;
            break;
        }
        case op > 1000: {
            const res = op / 1000;
            likes = res + "k";
            break;
        }
    }

    const submitLike = async () => {
        if (!like) {
            alert("terrasystem");
            const url = `${process.env.API_BASE_URL}/likes`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    who: userId || "guest session",
                    experiencia: props.id
                })
            });

            console.log(response);

            setLikes(true);
        }
    };

    return (
        <>
            <a className={lcss.expa} onClick={submitLike}>
                <span className="margi">{likes}</span>
                <span className="icon">
                    {/* <i class="fas fa-heart"></i> */}
                    <i class="far fa-heart"></i>
                </span>
            </a>
        </>
    );
};

export default Like;
