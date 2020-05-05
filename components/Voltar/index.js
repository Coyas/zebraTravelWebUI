import vcss from "./index.module.scss";
import Link from "next/link";
const Voltar = () => {
    return (
        <>
            <p className={vcss.voltar}>
                <Link href="/experiencias">
                    <a>
                        <span className="icon">
                            <img src="/img/voltar.png" />
                        </span>
                        Voltar
                    </a>
                </Link>
            </p>
        </>
    );
};

export default Voltar;
