import api from "../lib/api";

const Teste = () => {
    const { response, error, isLoading } = api("/api/testes");

    // console.log("isLoading=>");
    // console.log(isLoading);
    // console.log("error=>");
    // console.log(error);
    // console.log("response=>");
    // console.log(response);

    // if (!isLoading)
    //     response.map((teste, i) => {
    //         console.log(`${teste.nome} : ${i} ==> ${teste.image[0].url}`);
    //     });

    return (
        <div>
            <h1>Lista de dados testes requesitados via rest api</h1>
            <ul>
                {!isLoading &&
                    response.map((teste) => (
                        <li key={teste.id}>
                            <p>{teste.email}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Teste;
