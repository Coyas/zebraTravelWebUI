import fetch from "isomorphic-unfetch";

export default async function links(req, res) {
    try {
        const url = `${process.env.API_BASE_URL}/links-social`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const dados = await response.json();

        return dados;
    } catch (error) {
        return res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }
}
