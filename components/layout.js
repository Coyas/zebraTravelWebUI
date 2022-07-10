import Head from "next/head";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { UserProvider } from "../lib/user";

const Layout = ({
    children,
    user,
    loading = false,
    navbarData,
    footerData
}) => (
    <UserProvider value={{ user, loading }}>
        <Head>
            <Meta />
        </Head>

        <header>
            <NavBar dados={navbarData} />
        </header>

        {children}

        <Footer dados={footerData} />
    </UserProvider>
);

export default Layout;
