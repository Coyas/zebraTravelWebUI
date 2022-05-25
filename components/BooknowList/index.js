import BooknowItem from "../BooknowItem";

const BooknowList = ({ dados }) => {
    // console.log("props dados");
    // console.log(dados.data[0].attributes.imagens);
    // dados.data.map((value, index) => {
    //     console.log(value.attributes.imagens.data[index].attributes.url);
    // });

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

    // console.log(cores[0].cor);
    // console.log(cores[0].cortxt);
    // console.log(cores[1].cor);
    //console.log(cores[1].cortxt);
    // fazer uma funcao de aleatoriedade
    // return null;

    return (
        <>
            <div className="">
                {dados &&
                    dados.data.map((value, index) => (
                        <BooknowItem
                            key={index}
                            title={value.attributes.title}
                            image={`${value.attributes?.imagens.data[index].attributes.url}`}
                            cor={cores[index].cor}
                            cortxt={cores[index].cortxt}
                            slug={value.attributes.slug}
                        />
                    ))}
            </div>
        </>
    );
};

export default BooknowList;
