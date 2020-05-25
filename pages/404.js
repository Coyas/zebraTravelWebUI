import Link from "next/link";
import Layout from "../components/layout";
import notcss from "./styles/a404.module.scss";
import Headlogo from "../components/Headlogo";
import Zebralistras from "../components/Zebralistras";

const NotFound404 = () => {
    return (
        <>
            <Layout>
                <Zebralistras />

                <Headlogo marginHead="2%" />
                <div className={"container " + notcss.fornfor}>
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <h1 className={notcss.tite}>404</h1>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default NotFound404;
