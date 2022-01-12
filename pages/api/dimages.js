import fetch from "isomorphic-unfetch";

export default async function dimages(req, res) {
    // console.log("res");
    // console.log(req);
    // console.log(process.env.API_BASE_URL);

    // console.log("req:");

    const url = `${process.env.API_BASE_URL}/imagens-de-destaques`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}
