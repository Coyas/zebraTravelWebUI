import bookncss from "./index.module.scss";
import Link from "next/link";

const BooknowItem = (props) => {
    const cor = props.cor;
    const cortxt = props.cortxt;
    return (
        <>
            <div className={bookncss.booknowbox}>
                <h1>{props.title}</h1>
                <figure className="image">
                    <img className={bookncss.booknowimg} src={props.image} />
                </figure>
                <Link href={"/experiencias/" + props.slug}>
                    <a
                        style={{
                            backgroundColor: cor,
                            color: cortxt
                        }}
                        className="button"
                    >
                        BOOK NOW
                    </a>
                </Link>
            </div>
        </>
    );
};

export default BooknowItem;
