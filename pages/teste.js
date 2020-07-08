const Teste = () => {
    const clik = async () => {
        alert("ola mundo");
        const response = await fetch(
            `${process.env.API_BASE_URL}/auth/email-confirmation?confirmation=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODUsImlhdCI6MTU5NDIyNTIxMywiZXhwIjoxNTk0MzExNjEzfQ.w3uFI_Ude6nJR28Sn8KaNKaqhVRJ9ye3n9keFUt6Z0U`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("response:");
        console.log(response);
    };

    return (
        <div>
            <h1>Confirmacao de email</h1>
            <button onClick={clik}>confirmar email</button>
        </div>
    );
};

export default Teste;

{
    /* <Link href={{ pathname: 'about', query: { name: 'leangchhean' }}}><a>here</a></Link> */
}
