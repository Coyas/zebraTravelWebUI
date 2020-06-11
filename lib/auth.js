import Router from "next/router";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

// serve para implementar o login
export const setToken = (token) => {
    if (!process.browser) {
        return;
    }

    Cookies.set("username", token.user.username);
    Cookies.set("jwt", token.jwt);

    console.log(`cooie username: ${Cookies.get("username")}`);
    if (Cookies.get("username")) {
        Router.push("/");
    }
};

// serve para implementar o  logout
export const unsetToken = () => {
    if (!process.browser) {
        return;
    }

    Cookies.remove("jwt");
    Cookies.remove("username");

    Router.reload();
};

export const getUserFromLocalCookie = () => {
    return Cookies.get("username");
};
