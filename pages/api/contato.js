import fetch from "isomorphic-unfetch";

export default async function links(req, res) {
    try {
        const url = `${process.env.API_BASE_URL}/contactos`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log("api response");
        // console.log(response);
        const dados = await response.json();
        // console.log("dados contactos api");
        // console.log(dados);

        return res.status(200).json(dados);
    } catch (error) {
        return res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }
}
