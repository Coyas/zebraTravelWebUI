import BooknowItem from "../BooknowItem";

const BooknowList = () => {
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

    return (
        <>
            <div className="">
                <BooknowItem
                    title="Casa Colonial Koening"
                    image="/img/a.png"
                    cor={cores[0].cor}
                    cortxt={cores[0].cortxt}
                />
                <BooknowItem
                    title="Casa Colonial Koening"
                    image="/img/b.png"
                    cor={cores[0].cor}
                    cortxt={cores[0].cortxt}
                />
            </div>
        </>
    );
};
export default BooknowList;
