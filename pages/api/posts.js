import fetch from "isomorphic-unfetch";

export async function allposts(req, res) {
    try {
        // console.log("req:");
        // console.log(req);
        const url = `${process.env.API_BASE_URL}/posts?_limit=7&_sort=created_at:DESC`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log("api response");
        // console.log(response);
        const dados = await response.json();
        // console.log("dados links api");
        // console.log(dados);

        return res.status(200).json(dados);
    } catch (error) {
        return res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }
}
