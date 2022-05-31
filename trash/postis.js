import fetch from "isomorphic-unfetch";
import useSWR from "swr";

export default async function postis(req, res) {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = useSWR(
        `${process.env.API_BASE_URL}/posts`,
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    console.log("data from SWR");
    console.log(data);

    // render data
    return data;

    // try {
    //     // console.log("req:");
    //     // console.log(req);  /posts?_limit=7&_sort=created_at:DESC
    //     const url = `${process.env.API_BASE_URL}/posts?_limit=7&_sort=created_at:DESC`;
    //     const response = await fetch(url, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     console.log("api response postis");
    //     console.log(response);
    //     const dados = await response.json();
    //     console.log("dados links api postis");
    //     console.log(dados.attributes);

    //     return res.status(200).json(dados);
    // } catch (error) {
    //     return res.status(error.status || 500).json({
    //         code: error.code,
    //         error: error.message
    //     });
    // }
}
