import lcss from "./index.module.scss";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
import Cookies from "js-cookie";

const Like = (props) => {
    // console.log(props);
    let likes;
    const [like, setLikes] = useState(false);

    const userId = Cookies.get("username");

    const op = props.likes;
    const mil = 1000 * 1000;
    switch (true) {
        case op < 1000: {
            likes = op;
            break;
        }
        case op > 1000 && op < mil: {
            const res = op / 1000;
            likes = res + "K";
            break;
        }
        case op >= mil: {
            const res = op / mil;
            likes = res + "M";
            console.log("likes = res + M");
            break;
        }
    }

    // console.log("state like");
    // console.log(like);
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

            const data = await response.json();

            // console.log("response from POST likes");
            // console.log(response);
            // console.log(data);

            setLikes(true);
        }
    };

    return (
        <>
            <a className={lcss.expa} onClick={submitLike}>
                <span className="margi">{likes}</span>
                <span className="icon">
                    <i className="far fa-heart"></i>
                </span>
            </a>
        </>
    );
};

export default Like;
