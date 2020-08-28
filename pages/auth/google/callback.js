import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { setToken } from "../../../lib/auth";

const googleLogin = async (access_token) => {
    const response = await fetch(
        `${process.env.API_BASE_URL}/auth/google/callback?access_token=${access_token}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    // console.log(response);
    const responseData = await response.json();
    setToken(responseData);
    // console.log(responseData);
};

const Callback = () => {
    const router = useRouter();
    const { id_token, access_token } = router.query;

    googleLogin(access_token);

    return <h1>Logging...</h1>;
};

export default Callback;
