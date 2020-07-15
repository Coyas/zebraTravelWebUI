import fetch from "isomorphic-unfetch";

export function getPosts() {
    // try {
    // console.log("req:");
    // console.log(req);
    const url = `${process.env.API_BASE_URL}/posts?_limit=7&_sort=created_at:DESC`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function getPost(slug) {
    // console.log("slug | params.id");
    // console.log(slug);
    // try {
    // console.log("req:");
    // console.log(req);
    // return fetch(`https://jsonplaceholder.typicode.com/posts?slug=${slug}`);
    const url = `${process.env.API_BASE_URL}/posts/${slug}`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // console.log("api response slug");
    // console.log(response);
    // const dados = await response.json();
    // console.log("dados links api slug");
    // console.log(dados);

    // return res.status(200).json(dados);
    // } catch (error) {
    //     return res.status(error.status || 500).json({
    //         code: error.code,
    //         error: error.message
    //     });
    // }
}
