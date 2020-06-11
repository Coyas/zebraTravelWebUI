import fetch from "isomorphic-unfetch";

export default async function testes(req, res) {
    try {
        const url = `${process.env.API_BASE_URL}/newsletters`;
        const response = await fetch(url);
        const teste = await response.json();

        return res.status(200).json(teste);
    } catch (error) {
        return res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }
}
