import Head from "next/head";
// import NavBar from "../components/Navbar";
// import Footer from "../components/Footer";
import Meta from "../components/Meta";

export default ({ children, title = "Zebra Travel" }) => (
    <>
        <Head>
            <title>{title}</title>
            <Meta />
        </Head>

        {/* <header>
            <NavBar />
        </header> */}

        {children}

        {/* <Footer /> */}
    </>
);
