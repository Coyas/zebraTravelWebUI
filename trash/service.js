import fetch from "isomorphic-unfetch";

export default async function service(req, res) {
    try {
        // console.log("req:");
        // console.log(req);
        const url = `${process.env.API_BASE_URL}/servicetext`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log("api servicetext response");
        // console.log(response);
        const dados = await response.json();
        // console.log("api servicetext after await");
        // console.log(dados);

        return res.status(200).json(dados);
    } catch (error) {
        return res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }
}
