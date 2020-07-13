import fetch from "isomorphic-unfetch";

export function getExperiencias(limit = 3) {
    // try {
    // console.log("req:");
    // console.log(req);
    const url = `${process.env.API_BASE_URL}/experiencias?_limit=${limit}&_sort=created_at:DESC`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function getExperiencia(slug) {
    // try {
    // console.log("req:");
    // console.log(req);
    const url = `${process.env.API_BASE_URL}/experiencias/${slug}`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}
