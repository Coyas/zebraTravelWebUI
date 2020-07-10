import fetch from "isomorphic-unfetch";

export function getExperiencias() {
    // try {
    // console.log("req:");
    // console.log(req);
    const url = `${process.env.API_BASE_URL}/experiencias?_limit=3&_sort=created_at:DESC`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}
