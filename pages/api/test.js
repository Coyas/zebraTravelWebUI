export default (req, res) => {
    // req.method === 'POST'
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "John Doe" }));
};
