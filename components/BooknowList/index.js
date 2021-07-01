import BooknowItem from "../BooknowItem";

const BooknowList = ({ dados }) => {
    // console.log("props dados");
    // console.log(dados[0].imagens[0].url);
    const cores = [
        {
            cor: "#ffcb10",
            cortxt: "#000000"
        },
        {
            cor: "#000000",
            cortxt: "#ffffff !important"
        }
    ];
    console.log(cores[0].cor);
    console.log(cores[0].cortxt);
    console.log(cores[1].cor);
    console.log(cores[1].cortxt);
    // fazer uma funcao de aleatoriedade

    return (
        <>
            <div className="">
                {dados &&
                    dados.map((value, index) => (
                        <BooknowItem
                            key={index}
                            title={value.title}
                            image={`${process.env.API_BASE_URL}${value.imagens[0].url}`}
                            cor={cores[index].cor}
                            cortxt={cores[index].cortxt}
                            slug={value.slug}
                        />
                    ))}
            </div>
        </>
    );
};

export default BooknowList;
