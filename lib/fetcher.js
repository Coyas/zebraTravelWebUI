const fetcher = async (...args) =>
    await fetch(...args).then((res) => res.json());

export default fetcher;

// const fetcher = async (url) => {
//     const res = await fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
//     console.log(res.json());
//     return res.json();
// };
// const apiurl = `${process.env.API_BASE_URL}/links-social`;
// const { data, error } = useSWR(apiurl, fetcher);
